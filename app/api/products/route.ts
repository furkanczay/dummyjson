import { NextRequest, NextResponse } from "next/server";
import {products} from '@/data/products';

export async function GET(request: NextRequest){
  let data = products;
  const searchParams = request.nextUrl.searchParams;
  if(searchParams.has('skip') || searchParams.has('limit')){
    const skip = parseInt(searchParams.get('skip') as string) || 0;
    const limit = parseInt(searchParams.get('limit') as string) || data.length;
    data = data.slice(skip, skip + limit);
  }
  
  return NextResponse.json({
    success: true,
    data: data
  })
}