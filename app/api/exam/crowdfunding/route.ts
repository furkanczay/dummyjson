import { NextRequest, NextResponse } from "next/server";
import { crowdfunding } from "@/data/exam/crowdfunding";
export async function GET(request: NextRequest){
    return NextResponse.json(
        crowdfunding
    )
}