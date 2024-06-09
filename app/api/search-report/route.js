import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { EmployeeAssignCounter } from "@/lib/model/employeeAssignCounter";
import { Counter } from "@/lib/model/counter";
import { User } from "@/lib/model/users";
import { Order } from "@/lib/model/order";
import { PaymentSetting } from "@/lib/model/payementSetting";
import { EarnPoint } from "@/lib/model/earnPoint";
import { Notification } from "@/lib/model/notification";
import sendNotification from "@/app/helper";

function dateFormate(dateInfo) {
  const date = new Date(dateInfo);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

export async function POST(request) {
  const { branchId, countId, startDate, endDate } = await request.json();
  let search = {};
  if (countId) {
    search.counter = countId;
  }
  if (branchId) {
    search.branch = branchId;
  }
  if (startDate && endDate) {
    const formattedStartDate = dateFormate(startDate);
    const formattedEndDate = dateFormate(endDate);
    search = {
      payment_date: {
        $gte: formattedStartDate,
        $lte: formattedEndDate,
      },
    };
  }

  try {
    await mongoose.connect(connectionStr);
    var orderList = await Order.find(search)
      .populate("counter")
      .populate("branch")
      .populate("user");

    return NextResponse.json({ orderList: orderList, success: true });
  } catch (e) {
    return NextResponse.json({ message: e.message, success: false });
  }
}
