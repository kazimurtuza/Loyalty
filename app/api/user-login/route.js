import {NextResponse} from "next/server";
import bcrypt from 'bcrypt';
import mongoose from "mongoose";
import {User} from "@/lib/model/users";
import {connectionStr} from "@/lib/db";
import jwt from "jsonwebtoken"

export async function POST(request) {
    try {
        const {name, email, password} = await (request.json());
        if (!email || !password) {
            return NextResponse.json({msg: 'invalid fields','success':false}, {status: 400});
        }
        await mongoose.connect(connectionStr);
        const srcky=process.env.JWT_SECRET
        const record = {email: email};
        const user = await User.findOne(record);
        if (user) {
            if(user.is_delete==1)
            {
                return NextResponse.json({'msg': 'Account Already Deleted',success:false}, {status: 401});
            }
            if(user.status==0)
            {
                return NextResponse.json({'msg': 'Account Already Blocked',success:false}, {status: 401});
            }
            let id = user.id;
            let is_admin = 1;
            let type = user.user_type;
            let is_user = await bcrypt.compare(password, user.password);
            if (is_user) {
                let token = jwt.sign({name,email,type,is_admin,id}, srcky,{ expiresIn: '1h' });
                return NextResponse.json({user, 'token': token,'success':true}, {status: 200});
            }
        }
    } catch (error) {
        return NextResponse.json(error.message);
    }
    return NextResponse.json({'msg': 'Email or Password is incorrect','success':false}, {status: 401});
}