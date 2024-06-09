import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { EmployeeAssignCounter } from "@/lib/model/employeeAssignCounter";
import { User } from "@/lib/model/users";
import { Order } from "@/lib/model/order";
import { PaymentSetting } from "@/lib/model/payementSetting";
import { EarnPoint } from "@/lib/model/earnPoint";
import { Counter } from "@/lib/model/counter";


export async function GET(request,content) {

    let orderInfo=[];
    let earnPointInfo=[];
    let msg="";
    try{
        await mongoose.connect(connectionStr);
        const counterId=content.params.id;
        
        let query={counter: counterId};
        const info = new URL(request.url);
        const searchParams = info.searchParams;
        let date = searchParams.get('date');
        let start_date = searchParams.get('start_date');
        let end_date = searchParams.get('end_date');

        if(date==null || date=="")
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
       
        orderInfo =await Order.find(query).populate([{
            path:'counter',
            model:'counters'
        },
        {
            path:'user',
            model:'users'
        }
    
        ]).sort({created_at:-1});   
        return NextResponse.json({orderInfo,msg,success:true});

        
    }
    catch(error)
    {
        msg=error.message;
        return NextResponse.json({msg,success:false});
    }
    
}