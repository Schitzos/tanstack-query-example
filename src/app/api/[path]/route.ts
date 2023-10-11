import AxiosAdapters from '@/utils/axiosAdapter'
import { NextApiRequest } from 'next'
import { cookies } from 'next/headers'

export async function POST(request:any) {
  const body = await request.json()
  // const res = await request
  const option = {
    url:`${process.env.NEXT_PUBLIC_BASE_URL}/admins/auth/signin`,
    method:'POST',
    data: body,
    headers: {
      'Content-Type':'application/json',
      'Authorization':cookies().get('usertoken'),
    },
  }
  const { data } = await AxiosAdapters(option)
  return Response.json(data)
}

export async function GET(req:NextApiRequest) {
  const token = await cookies().get('usertoken')||''
  const newUrl = await process.env.NEXT_PUBLIC_BASE_URL
  const originalString = req.url;
  if(originalString){
    const replacedString = originalString.
      replace(`${req.nextUrl.origin}/api`,newUrl);
    const option = {
      url:replacedString,
      method:'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token?.value}`,
      },
    }
    const data = await AxiosAdapters(option)
    return Response.json(data)
  }
}

