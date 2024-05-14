import { NextRequest, NextResponse } from "next/server";
import Users from '@/data/user.json';

export async function GET(request: NextRequest){
  let users = Users;
  const searchParams = request.nextUrl.searchParams;
  if(searchParams.has('skip') || searchParams.has('limit')){
    const skip = parseInt(searchParams.get('skip') as string) || 0;
    const limit = parseInt(searchParams.get('limit') as string) || users.length;
    users = users.slice(skip, skip + limit);
  }
  
  return NextResponse.json({
    success: true,
    data: users
  })
}