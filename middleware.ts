import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import *as jose from "jose"
import jwt from 'jsonwebtoken'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const bearerToken = request.headers.get("authorization") as string
    if (!bearerToken) {
        return new NextResponse(JSON.stringify({error: "Bearer Token Not Defined"}))
    }
    const token = bearerToken.split(' ')[1];
    const key= await process.env.JWT_SECRET
    const srcky= await new TextEncoder().encode(key)
    
    try {
     await jose.jwtVerify(token,srcky)
    }catch (error){
        return new NextResponse(JSON.stringify({error: "Bearer Token Not incorrect"}))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/about/:path*',
        '/api/loginuser',
        '/api/products/',
        '/api/chat',
        '/api/chatRoom',
        '/api/chatUnseenCount',
        '/api/notification',
        '/api/notification-clear',
        '/api/product-review',
    ]
}
