import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { User } from "@/lib/model/users";

export async function GET(request, content) {
  try {
    const info = new URL(request.url);
    const searchParams = info.searchParams;
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 12;
    const skip = (page - 1) * limit;

    const branchId = content.params.branch_id;

    await mongoose.connect(connectionStr);

    let query = {};

    if (branchId) {
      query = { branch: branchId };
    }

    const users = await User.find(query)
      .sort({ created_at: -1 })
      .skip(skip)
      .limit(limit);

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
