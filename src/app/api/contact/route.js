import { connectDB } from "@/app/config/database"
import UserQuery from "@/app/models/userquery"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function POST(request){
    const {name,email,subject,description}=await request.json()
    console.log("name",name)
    await connectDB()
    await UserQuery.create({name,email,subject,description})
    return NextResponse.json({"message":"Done successfully"})
}