import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { Ads } from "@/lib/model/ads";
import { uploadBase64Img } from "@/app/helper";

export async function GET(request,content) {
  let result = [];
  try {
    const id = content.params.id;
    await mongoose.connect(connectionStr);
    let add = await Ads.findById(id);
    let status;
    if (add.status == 1) status = 0;
    else status = 1;
    result = await Ads.findOneAndUpdate({_id: id}, {status: status})
    return NextResponse.json({ result, success: true });
  } catch (error) {
    result = error.message;
    return NextResponse.json({ result, success: false });
  }
}
export async function DELETE(request,content) {
    let result = [];
    try {
      const id = content.params.id;
      await mongoose.connect(connectionStr);
      let result = await Ads.findOneAndDelete({_id:id});
      return NextResponse.json({ result, success: true });
    } catch (error) {
      result = error.message;
      return NextResponse.json({ result, success: false });
    }
  }
  