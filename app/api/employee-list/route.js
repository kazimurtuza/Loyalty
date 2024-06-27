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
  let query = { user_type: { $ne: "user" } };

  if (userData.user_type === "branch-admin") {
    query.branch = userData.branch;
  } else if (userData.user_type === "brand-admin") {
    query = {}; // Reset query for brand-admin to fetch all users
  }


  
  result = await User.find(query)
  .populate("branch").sort({created_at:-1})
  // .skip(skip)
  // .limit(limit);

const filteredUsers = [];

for (const user of result) {
  console.log(user.user_type);
  if (user.user_type != 'user') {
    console.log(user.user_type);
      filteredUsers.push(user);
  }
}
// Apply skip and limit to the filtered users
const skippedUsers = filteredUsers.slice(skip, skip + limit);

  return NextResponse.json({ data: skippedUsers, success: true });

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
