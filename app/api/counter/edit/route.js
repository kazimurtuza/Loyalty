import { connectionStr } from "@/lib/db";
import { Counter } from "@/lib/model/counter";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function POST(request,content ){
    let result=[];
    try{
        const payload= await(request.json());
        const filter={"_id":payload.id};
        const updateData={
            name:payload.name,
            info:payload.info
        }
        await mongoose.connect(connectionStr);
        const result=await Counter.findOneAndUpdate(filter,updateData);

        return NextResponse.json({ result, success: true , message:"Successfully updated counter"});
    }
    catch(error)
    {
        result=error;
    }
    return NextResponse.json(result);
}