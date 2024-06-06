import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import jwt from "jsonwebtoken";
import { AuthUser } from "@/app/helper";
import { uploadBase64Img } from "@/app/helper";
import {headers} from "next/headers";
import { User } from "@/lib/model/users";
import { Counter } from "@/lib/model/counter";
import { branch } from "@/lib/model/branch";
import bcrypt from 'bcrypt';

export async function GET(){

    let result=[];

    try{   
        console.log(connectionStr);
        const userInfo = await AuthUser();
        await mongoose.connect(connectionStr);

        result = await User.findById({_id:userInfo.id}).populate(
            {
                path:'access_counter',
                model:'counters',
                populate: {
                    path: 'branch',  
                    model: 'Branch',
                }
            }
        );     
    }
    catch(error)
    {
        result=error.message;
    }
    return NextResponse.json(result, {status: 200});

}

export async function PUT(request) {
    try {
        var result;
        await mongoose.connect(connectionStr);
        const userInfo = await AuthUser();
        const { first_name,last_name, phone, image,password } = await request.json();
        let user = await User.find({ _id: userInfo.id });

        if (user) {
            const filter = { _id: userInfo.id };
            const update={};
            if(first_name)
            {
                update.first_name=first_name;
                update.name=first_name+' '+user.last_name;
            }
            if(last_name)
            {
                update.last_name=last_name;
                update.name=user.first_name+' '+last_name;
            }
            if(first_name && last_name)
            {
                update.name=first_name+' '+last_name;
            }
            if(phone)
            {        
                update.phone=phone;
            }
            if(image)
            {        
                let UpdateImage=await uploadBase64Img(image);
                update.img=UpdateImage;
            }
            if(password)
            {        
                const hashPassword = await bcrypt.hash(password, 10);
                update.password = hashPassword;
            }
           
          
            result=await User.findOneAndUpdate(filter, update);
            result=await User.find({ _id: userInfo.id});
        } else {
            result = "No user found";
            msg="No user found";
            return NextResponse.json({ msg, success: false });
        }

        return NextResponse.json({ result, success: true });
    } catch (error) {
        return NextResponse.json({ error:error.message, success: true });
    }
}