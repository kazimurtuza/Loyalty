import fs from "fs";
import jwt from "jsonwebtoken";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function AuthUser(){
    try {
    const headerdata=headers();
    const bearerToken = headerdata.get("authorization");
    const token = bearerToken.split(' ')[1];
    let info=await jwt.decode(token);
    return info;
    }catch (e) {
        return false;
    }



}

export async function uploadBase64Img(image) {
    try {

        // Convert base64 to buffer
         const imageBuffer = await Buffer.from(image.split('base64,')[1], 'base64');
        // image name
        var filename = await `${uuidv4()}.jpg`; // Use the correct extension
        // Define the absolute path to save the image
        const pathext = 'public/uploads'
        const imagePath = await path.resolve(pathext, filename);
        await fs.writeFileSync(imagePath, imageBuffer);

    } catch (e) {
        return NextResponse.json({e, success: 'img upload error found'});
    }

    return 'uploads/' + filename;

}

export default async function sendNotification(title, body, tokenList) {
    const url = 'https://fcm.googleapis.com/fcm/send';
    const serverKey = 'AAAA3WmLRRM:APA91bHHMEYXDRuak81D3zljzTgbYjvXM6WP2eu0wdhzAAorBFX52bX1sEG2xG6kDgO4Y-fKJBnZNRmmmSfUI94XYyo_bj06Uk_X-QKNhGzfY5wuw82kNPZxLth6IiLJy20M3ITGKTx3'; // ADD SERVER KEY HERE PROVIDED BY FCM

    const data = {
        registration_ids: tokenList,  // expects an array of tokens
        notification: {
            title: title,
            body: body,
        },
    };

    const headers = {
        Authorization: 'key=' + serverKey,
        'Content-Type': 'application/json',
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Notification sent successfully:', responseData);
        } else {
            const errorData = await response.json();
            console.error('Failed to send notification:', errorData);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}