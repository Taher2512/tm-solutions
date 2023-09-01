
import { connectDB } from "@/app/config/database";
import UserQuery from "@/app/models/userquery";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, subject, description } = await request.json();
  await connectDB();
  const date=new Date();
  await UserQuery.create({ name, email, subject, description,date });
  return NextResponse.json({ message: "Done successfully" });
}

