import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { Branch } from "@/lib/model/branch";

export async function POST(request, content) {
  let result = [];

  const payload = await request.json();

  result = await Branch.findOneAndUpdate(
    { _id: payload.id },
    {
      info: payload.info,
      name: payload.name,
      public_key: payload.public_key,
      screct_key: payload.screct_key,
      encryption_key: payload.screct_key,
    }
  );

  return NextResponse.json({ result, success: true });
}

export async function GET(request, content) {
  let result = [];
  try {
    const id = content.params.id;
    const record = { _id: id };
    await mongoose.connect(connectionStr);
    const result = await Branch.findById(record);
    return NextResponse.json({ result, success: true });
  } catch (error) {
    result = error;
  }
  return NextResponse.json(result);
}
