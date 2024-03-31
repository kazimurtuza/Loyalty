import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { Branch } from "@/lib/model/branch";
import { Counter } from "@/lib/model/counter";
import { User } from "@/lib/model/users";
import { Order } from "@/lib/model/order";

export async function GET(req) {
  let result = {};
  try {
    await mongoose.connect(connectionStr);
    const branch = await Branch.countDocuments();
    const counter = await Counter.countDocuments();
    const staff = await User.countDocuments({ user_type: "employee" });
    const user = await User.countDocuments({ user_type: "user" });
    const order = await Order.countDocuments();
    const totalPayment = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$total_amount" }, // Assuming 'amount' is the field you want to sum
        },
      },
    ]);

    const brandPayment = await Order.aggregate([
      {
        $group: {
          _id: null,
          brandAmount: { $sum: "$branch_receive" }, // Assuming 'amount' is the field you want to sum
        },
      },
    ]);

    const superAdminPayment = await Order.aggregate([
      {
        $group: {
          _id: null,
          adminAmount: { $sum: "$technovicinity_receive" }, // Assuming 'amount' is the field you want to sum
        },
      },
    ]);

    result = {
      order: order,
      branch: branch,
      counter: counter,
      staff: staff,
      user: user,
      totalPayment: totalPayment[0].totalAmount,
      brandPayment: brandPayment[0].brandAmount,
      superAdminPayment: superAdminPayment[0].adminAmount,
    };
  } catch (error) {
    result = error.message;
  }
  return NextResponse.json({ data: result, success: true });
}
