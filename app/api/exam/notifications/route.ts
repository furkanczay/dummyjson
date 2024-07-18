import { NextRequest, NextResponse } from "next/server";
import notifications from "@/data/exam/notifications.json"

export async function GET(request: NextRequest){
    return NextResponse.json(notifications)
}