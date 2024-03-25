import {NextResponse} from "next/server";
import mongoose from "mongoose";
import {connectionStr} from "@/lib/db";
import {Counter} from "@/lib/model/counter";
import { Branch } from "@/lib/model/branch";

export async function GET() {
    let result = [];
    try {
        await mongoose.connect(connectionStr);
        result = await Counter.find({status:1}).populate({
            path:'branch',
            model:'Branch'
        }).sort({ created_at: -1 });
    } catch (error) {
        result = error.message;
    }
    return NextResponse.json(result);
}
