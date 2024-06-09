import { AuthUser } from "@/app/helper";
import { connectionStr } from "@/lib/db";
import { Counter } from "@/lib/model/counter";
import { User } from "@/lib/model/users";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request,content ){
    try{
        await mongoose.connect(connectionStr);
        var result=[];
        var query={};
        var userInfo=await AuthUser();
        if(userInfo){
            var userId=userInfo.id
            let userData=await User.findById(userId)
            if('branch-admin'==userData.user_type){
              query.branch=userData.branch
            }
            if('brand-admin'==userData.user_type){
              query={}
            }
        }
      
        await mongoose.connect(connectionStr);
        result = await Counter.find(query).populate('branch')
    }
    catch(error)
    {
        result=error.message;
    }
    return NextResponse.json(result);
}

export async function POST(request) {
    let result = [];
    try {
        const payload = await (request.json());
        await mongoose.connect(connectionStr);
        let data = await Counter.find();
        let counter_no = data.length + 1;
        let counter = new Counter({...payload, counter_no})
        result = await counter.save();
    } catch (error) {
        result = error;
    }
    return NextResponse.json({result, success: true});
}