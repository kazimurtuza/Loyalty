import { connectionStr } from "@/lib/db";
import { Order } from "@/lib/model/order";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

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
    console.log("Start date is " + startDate);
    console.log("End date is " + endDate);
    
    // Assuming dateFormate returns dates in 'MM/DD/YYYY' format
    const formattedStartDate = new Date(dateFormate(startDate));
    const formattedEndDate = new Date(dateFormate(endDate));
  
    console.log("Formatted start date is " + formattedStartDate);
    console.log("Formatted end date is " + formattedEndDate);
  
    search.created_at = {
      $gte: startDate,
      $lte: endDate,
    };
  }

  try {
    await mongoose.connect(connectionStr);
    var orderList = await Order.find(search)
     .populate([{
            path:'counter',
            model:'counters'
    },
    {
        path:'user',
        model:'users'
    },
    {
        path:'branch',
        model:'Branch'
    }

    ]);

    return NextResponse.json({ orderList: orderList, success: true });
  } catch (e) {
    return NextResponse.json({ message: e.message, success: false });
  }
}






