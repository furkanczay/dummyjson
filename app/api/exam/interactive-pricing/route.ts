import { NextRequest, NextResponse } from "next/server";
import { interactivePricing } from "@/data/exam/interactivePricing";
export async function GET(request: NextRequest){
    return NextResponse.json(
        interactivePricing
    )
}