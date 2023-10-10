import AxiosAdapters from '@/utils/axiosAdapter'

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
  const data = await AxiosAdapters(option)
  return Response.json(data)
}