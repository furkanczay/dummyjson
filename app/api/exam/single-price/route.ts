import { NextRequest, NextResponse } from "next/server";
const singlePrice = {
    "community": {
      "message": "Join our community",
      "guarantee": "30-day, hassle-free money back guarantee",
      "benefits": "Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills."
    },
    "subscription": {
      "type": "Monthly Subscription",
      "price": "29 per month",
      "description": "Full access for less than $1 a day"
    },
    "why_us": {
      "title": "Why Us",
      "features": [
        "Tutorials by industry experts",
        "Peer & expert code review",
        "Coding exercises",
        "Access to our GitHub repos",
        "Community forum",
        "Flashcard decks",
        "New videos every week"
      ]
    }
  }

export async function GET(request: NextRequest){
    return NextResponse.json(singlePrice)
}