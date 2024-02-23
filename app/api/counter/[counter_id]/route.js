import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import {Counter} from "@/lib/model/counter";

export async function GET(request,content ){
    let result=[];
    try{
        let counter_id=content.params.counter_id;
        await mongoose.connect(connectionStr);
        result = await Counter.findById({'_id':counter_id,});
    }
    catch(error)
    {
        result=error;
    }
    return NextResponse.json(result);
}

export async function PUT(request,content ){
    let result=[];
    try{
        const counterId=content.params.counter_id;
        const filter={"_id":counterId};
        const payload= await request.json();
        await mongoose.connect(connectionStr);
        const result=await Counter.findOneAndUpdate(filter,payload);
        return  NextResponse.json({result,success:true});
    }
    catch(error)
    {
        result=error;
    }
    return NextResponse.json(result);
}