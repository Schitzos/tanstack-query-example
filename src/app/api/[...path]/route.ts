import AxiosAdapters from '@/utils/axiosAdapter'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request:any) {
  const body = await request.json()
  const option = {
    url:`${process.env.NEXT_PUBLIC_BASE_API_URL}/admins/auth/signin`,
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

export async function GET(req: NextRequest) {
  try {
    const token = (await cookies().get('usertoken'))?.value || '';
    const originalUrl = req.url;
    if (!originalUrl) {
      throw new Error('Original string is empty.');
    }

    const replacedUrl = originalUrl.replace(
      String(`${req.nextUrl.origin}/api`),
      String(process.env.NEXT_PUBLIC_BASE_API_URL)
    );

    const option = {
      url: replacedUrl,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };
    
    const data = await AxiosAdapters(option);
    return Response.json(data);
  } catch (error:any) {
    // Handle errors, e.g., log the error or return an error response.
    return new Response('An error occurred: ' + error.message, { status: 500 });
  }
}

