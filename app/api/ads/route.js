import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { Ads } from "@/lib/model/ads";
import { uploadBase64Img } from "@/app/helper";

export async function GET(req) {
    let result = [];
    const info = await new URL(req.url)
    const searchParams = info.searchParams;
    let user = searchParams.get('user');
    console.log(user);
    try {
        let query={status:1};
        if(user=='admin')
        {
            query={};
        }
        await mongoose.connect(connectionStr);
        result = await Ads.find(query)
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
        if(payload.banner)
        {
            payload.banner = await uploadBase64Img(payload.banner);
        }
        await mongoose.connect(connectionStr);
        let ads =new Ads(payload)
        result=await ads.save();
        return NextResponse.json({result,success:true});
    }
    catch(error)
    {
        result=error;
        return NextResponse.json({result,success:false});
    }
    
    
}