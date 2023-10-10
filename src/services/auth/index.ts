
export function authLogin() {
  const options = {
    // url:`${process.env.NEXT_PUBLIC_BASE_URL}/admins/auth/signin`,
    url:`/api/auth/login`,
    method:'POST',
    message:{
      title:'Welcome',
      success:'Berhasil login',
      error:''
    }
  }

  return options
}