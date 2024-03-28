import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { EmployeeAssignCounter } from "@/lib/model/employeeAssignCounter";
import { Counter } from "@/lib/model/counter";


export async function PUT(request,content) {

    let result=[];
    try{
        const assignId=content.params.id;
        const payload= await(request.json());
        await mongoose.connect(connectionStr);
        const filter2={"_id":assignId};
        payload.status=payload.assign_status;
        payload.assign_out_date_time = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
        await mongoose.connect(connectionStr);
        result=await EmployeeAssignCounter.findOneAndUpdate(filter2,payload);
        const filter={"_id":result.counter};
        payload.status=1;
        await mongoose.connect(connectionStr);
        result=await Counter.findOneAndUpdate(filter,payload);
        result="Assign out successfully"
    }
    catch(error)
    {
        result=error.message;
    }
    return NextResponse.json({result:result,success:true});
}