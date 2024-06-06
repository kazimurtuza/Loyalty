import {NextResponse} from "next/server";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import {User} from "@/lib/model/users";
import {connectionStr} from "@/lib/db";
import validator from "validator/es";
import {uploadBase64Img} from "@/app/helper";
import nodemailer from "nodemailer";

export async function GET() {

    let result = [];

    try {
        await mongoose.connect(connectionStr);
        result = await User.find();
    } catch (error) {
        result = error;
    }
    return NextResponse.json(result);

}

export async function POST(request) {

    let result = [];
    let msg;
    try {
        const payload = await (request.json());
        await mongoose.connect(connectionStr);
        if (!payload.first_name || !payload.last_name || !payload.email || !payload.password) {
            return NextResponse.json({msg: 'invalid fields'}, {status: 400});
        }
        if (!validator.isEmail(payload.email)) {
            return new NextResponse(JSON.stringify({msg: 'Invalid email address','success':false}), {status: 400});
        }
        const record = {email: payload.email};
        const is_findEmail = await User.findOne(record);
        if (is_findEmail) {
            return NextResponse.json({msg: 'Email is already present','success':false}, {status: 400});
        } 
        payload.name= await payload.first_name + ' ' + payload.last_name;
        payload.img=null;
        if (payload.password) {
            const hashPassword = await bcrypt.hash(payload.password, 10);
            payload.password = hashPassword;
        }
        if (payload.img) {
            let img=await payload.img;
            const uploadLink = await uploadBase64Img(img);
            payload.img= await  uploadLink;
        }
        let user = new User(payload);
        result = await user.save();


        const transporter = nodemailer.createTransport({
            host: 'mail.loyaltypaypoints.com',
            port: 465,
            secure: true, // Set to false for explicit TLS
            auth: {
                user: 'admin@loyaltypaypoints.com',
                pass: 'J[_AZgPYPSb7#a',
            },
            tls: {
                // Do not fail on invalid certificates
                //rejectUnauthorized: false,
            },
        });


        const emailTemplatePath = path.resolve("./app/emails/forget_password.ejs");
        const emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");
        const mailContent = ejs.render(emailTemplate, { name:userInfo.name,date:new Date()});


        const mailOptions = {
            from: 'admin@loyaltypaypoints.com',
            to: user.email,
            subject: "Loyality Account Password Reset",
            html: mailContent,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

    } catch (error) {
        msg = error.message;
    }
    return NextResponse.json({result,msg, success: true});
}



