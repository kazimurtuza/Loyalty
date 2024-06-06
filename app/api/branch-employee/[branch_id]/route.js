import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import {Counter} from "@/lib/model/counter";
import {Admin} from "@/lib/model/admin";
import { User } from "@/lib/model/users";
import { branch } from "@/lib/model/branch";

export async function GET(request,content ){
    let result=[];
    try{
        const info = await new URL(request.url)
        const searchParams = info.searchParams;
        let page = Number(searchParams.get('page')) || 1;
        let limit = Number(searchParams.get('limit')) || 12;
        let skip = (page - 1) * limit;

        let branchId=content.params.branch_id;
        console.log(branchId);
        await mongoose.connect(connectionStr);
        result = await User.find({'branch':branchId}).sort({ created_at: -1}).skip(skip).limit(limit);
    }
    catch(error)
    {
        result=error.message;
    }
    return NextResponse.json(result);
}