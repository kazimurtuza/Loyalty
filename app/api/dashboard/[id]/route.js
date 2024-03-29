import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { EmployeeAssignCounter } from "@/lib/model/employeeAssignCounter";
import { Counter } from "@/lib/model/counter";
import { User } from "@/lib/model/users";
import { Order } from "@/lib/model/order";
import { PaymentSetting } from "@/lib/model/payementSetting";
import { EarnPoint } from "@/lib/model/earnPoint";


export async function GET(request,content) {

    let orderInfo=[];
    let earnPointInfo=[];
    let msg="";
    try{
        await mongoose.connect(connectionStr);
        const userId=content.params.id;
       
        orderInfo =await Order.find({user: userId}).populate({
            path:'counter',
            model:'counters'
        }).limit(5).sort({created_at:-1}); 
        earnPointInfo =await EarnPoint.find({user: userId}).populate({
            path:'order',
            model:'Order',
            populate: {
                path: 'counter',  
                model: 'counters',
            }
        }).limit(5).sort({created_at:-1});
        const totalCost = await Order.countDocuments({user: userId});
        const userDetails = await User.findOne({_id: userId});
        return NextResponse.json({orderInfo,earnPointInfo,totalCost,userDetails,msg,success:true});

        
    }
    catch(error)
    {
        msg=error.message;
        return NextResponse.json({msg,success:false});
    }
    
}