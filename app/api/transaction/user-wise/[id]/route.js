import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { Order } from "@/lib/model/order";
import { Counter } from "@/lib/model/counter";
import { User } from "@/lib/model/users";

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
        let start_date = searchParams.get('start_date');
        let end_date = searchParams.get('end_date');

        if((start_date==null || start_date=="") && (date==null || date==""))
        {

        }
        else if(date==null || date=="")
        {
            start_date = new Date(start_date);
            end_date = new Date(end_date);

            query.payment_date = {
                $gte: start_date,
                $lte: end_date,
            };

        }
         else {
            const dateObj = new Date(date);
            const nextDay = new Date(dateObj);
            nextDay.setDate(dateObj.getDate() + 1);

            query.payment_date = {
                $gte: dateObj,
                $lt: nextDay
            };
        }
        
        orderInfo = await Order.find(query).populate([{
            path: 'counter',
            model: 'counters'
        },
        {
            path:'user',
            model:'users'
        }
    
        ]).sort({ created_at: -1 });
        
        return NextResponse.json({ orderInfo, msg, success: true, date });
        
    } catch (error) {
        msg = error.message;
        return NextResponse.json({ msg, success: false });
    }
}