import { NextRequest, NextResponse } from "next/server";
import { dropdownNav } from "@/data/exam/dropdownNav";
export async function GET(request: NextRequest){
    return NextResponse.json(
        dropdownNav
    )
}