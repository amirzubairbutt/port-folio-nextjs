import dbConnect from "app/app/lib/dbConnect";
import User from "app/app/lib/models/user";
import { NextResponse } from "next/server";


export default async function GET() {
    await dbConnect();

    try{
        const user = await User.find({});
        NextResponse.json({success: true, data: user});
    }catch(error: any){
        console.log(error)
        NextResponse.json({success: false, error: error.message});
    }
}