import Products from '@/data/product.json';
import defaultHeaders from '@/utils/cors';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log(id);
  
  const product = Products.find((product:any) => product.id == id);
  if (!product) {
    return NextResponse.json({
      success: false,
      error: 'Product not found'
    }, {
      status: 404,
      headers: defaultHeaders
    
    })
  }
  return NextResponse.json({
    success: true,
    data: product
  },{
    status: 200,
    headers: defaultHeaders
  })
  
}