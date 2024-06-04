import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { Order } from "@/lib/model/order";

export async function GET(request, content) {
    let orderInfo = [];
    let msg = "";
    
    try {
        await mongoose.connect(connectionStr);
        const userId = content.params.id;
        let query = { user: userId };
        const info = new URL(request.url);
        const searchParams = info.searchParams;
        let date = searchParams.get('date');
        
        if (date) {
            const dateObj = new Date(date);
            const nextDay = new Date(dateObj);
            nextDay.setDate(dateObj.getDate() + 1);

            query.payment_date = {
                $gte: dateObj,
                $lt: nextDay
            };
        }
        
        orderInfo = await Order.find(query).populate({
            path: 'counter',
            model: 'counters'
        }).sort({ created_at: -1 });
        
        return NextResponse.json({ orderInfo, msg, success: true, date });
        
    } catch (error) {
        msg = error.message;
        return NextResponse.json({ msg, success: false });
    }
}