import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { EmployeeAssignCounter } from "@/lib/model/employeeAssignCounter";
import { Counter } from "@/lib/model/counter";
import { User } from "@/lib/model/users";

export async function GET(req) {
    let result = [];

    try {
        await mongoose.connect(connectionStr);
        result = await EmployeeAssignCounter.find().populate([{
            path:'counter',
            model:'counters'
        },
        {
            path:'employee',
            model:'users'
        }  
        ])
            .sort({ created_at: -1 })
    } catch (error) {
        result = error.message;
    }
    return NextResponse.json({data:result,success:true});
}
export async function POST(request) {

    let result=[];
    try{
        const payload= await(request.json());
        await mongoose.connect(connectionStr);
        let employeeAssign =new EmployeeAssignCounter(payload);
        const filter={"_id":payload.counter};
        payload.status=0;
        await mongoose.connect(connectionStr);
        result=await Counter.findOneAndUpdate(filter,payload);
        result=await employeeAssign.save();
    }
    catch(error)
    {
        result=error;
    }
    return NextResponse.json({result,success:true});
}