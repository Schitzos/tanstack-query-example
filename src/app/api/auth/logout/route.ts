import { cookies } from 'next/headers'

export async function POST() {
  cookies().delete('usertoken');
  return new Response('Hello, Next.js!', {
    status: 200,
  })
}