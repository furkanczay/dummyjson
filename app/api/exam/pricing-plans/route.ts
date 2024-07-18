import { NextRequest, NextResponse } from "next/server";
import pricingPlans from "@/data/exam/pricingPlans.json"
export async function GET(request: NextRequest){
    return NextResponse.json(pricingPlans)
}