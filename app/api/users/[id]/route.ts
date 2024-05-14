import Users from '@/data/user.json';
import defaultHeaders from '@/utils/cors';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log(id);
  
  const user = Users.find((product:any) => product.id == id);
  if (!user) {
    return NextResponse.json({
      success: false,
      error: 'User not found'
    }, {
      status: 404,
      headers: defaultHeaders
    
    })
  }
  return NextResponse.json({
    success: true,
    data: user
  },{
    status: 200,
    headers: defaultHeaders
  })
  
}