import { NextRequest, NextResponse } from "next/server";
import Products from '@/data/product.json';

export async function GET(request: NextRequest){
  let products = Products;
  const searchParams = request.nextUrl.searchParams;
  if(searchParams.has('skip') || searchParams.has('limit')){
    const skip = parseInt(searchParams.get('skip') as string) || 0;
    const limit = parseInt(searchParams.get('limit') as string) || products.length;
    products = products.slice(skip, skip + limit);
  }
  
  return NextResponse.json({
    success: true,
    data: products
  })
}