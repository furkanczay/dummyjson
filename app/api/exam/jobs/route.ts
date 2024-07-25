import { NextRequest, NextResponse } from "next/server";
import jobs from "@/data/exam/jobs.json"
export async function GET(request: NextRequest){
    return NextResponse.json(jobs)
}