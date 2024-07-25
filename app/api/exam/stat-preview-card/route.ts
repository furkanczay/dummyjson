import { NextRequest, NextResponse } from "next/server";
const statPreview = {
    "insights": {
      "message": "Get insights that help your business grow.",
      "benefits": "Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency."
    },
    "statistics": [
      "10k+ COMPANIES",
      "314 TEMPLATES",
      "12M+ QUERIES"
    ]
  }

export async function GET(request: NextRequest){
    return NextResponse.json(statPreview)
}