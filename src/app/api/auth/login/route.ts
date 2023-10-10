import AxiosAdapters from '@/utils/axiosAdapter'
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
      'Authorization':process.env.NEXT_PUBLIC_BASIC_AUTH,
    },
  }
  const { data } = await AxiosAdapters(option)
  cookies().set('usertoken', data.token)
  const modData = data.profile
  return Response.json(modData)
}

