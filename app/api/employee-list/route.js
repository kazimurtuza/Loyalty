import { AuthUser } from "@/app/helper";
import { connectionStr } from "@/lib/db";
import { User } from "@/lib/model/users";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  var result;
  await mongoose.connect(connectionStr);

  const info = await new URL(request.url)
  const searchParams = info.searchParams;
  let page = Number(searchParams.get('page')) || 1;
  let limit = Number(searchParams.get('limit')) || 12;
  let skip = (page - 1) * limit;

  let userInfo = await AuthUser();

  let userData = await User.findById(userInfo.id);

  let query = {};
  if ("branch-admin" == userData.user_type) {
    query.branch = userData.branch;
  }
  if ("brand-admin" == userData.user_type) {
    query = {};
  }
  result = await User.find(query).populate("branch").skip(skip).limit(limit);
  return NextResponse.json({ data: result, success: true });

  return NextResponse.json({ data: userData, success: true });

  // let result = [];
  // try {
  //   const info = await new URL(request.url);
  //   const searchParams = info.searchParams;
  //   let page = Number(searchParams.get("page")) || 1;
  //   let limit = Number(searchParams.get("limit")) || 12;
  //   let skip = (page - 1) * limit;
  //   await mongoose.connect(connectionStr);
  //   result = await User.find({
  //     user_type: { $ne: "user" },
  //   })
  //     .populate("branch")
  //     .sort({ created_at: -1 })
  //     .exec()
  //     .skip(skip)
  //     .limit(limit);
  // } catch (error) {
  //   result = error;
  // }
  // return NextResponse.json(result);
}
