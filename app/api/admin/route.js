import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import {Admin} from "@/lib/model/admin";
import validator from "validator/es";
import bcrypt from "bcrypt";
import {uploadBase64Img} from "@/app/helper";
export async function GET(){
    let result=[];
    try{
        await mongoose.connect(connectionStr);
        result = await User.find();
    }
    catch(error)
    {
        result=error;
    }
    return NextResponse.json(result);
}
export async function POST(request) {

    let result=[];
    try{
        const payload= await(request.json());
        await mongoose.connect(connectionStr);

        if (!payload.name || !payload.email || !payload.password) {
            return NextResponse.json({msg: 'invalid fields'}, {status: 400});
        }
        if (!validator.isEmail(payload.email)) {
            return new NextResponse(JSON.stringify({msg: 'Invalid email address'}), {status: 400});
        }
        if (payload.password) {
            const hashPassword = await bcrypt.hash(payload.password, 10);
            payload.password = hashPassword;
        }
        if (payload.img) {
            let uploadLink =await uploadBase64Img(payload.img)
            payload.img= uploadLink;
        }

        let user =new Admin(payload)
        result=await user.save();
    }
    catch(error)
    {
        result=error;
    }
    return NextResponse.json({result,success:true});
}