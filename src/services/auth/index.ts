
export function authLogin() {
  const options = {
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

export function authLogout() {
  const options = {
    url:`/api/auth/logout`,
    method:'POST',
    message:{
      title:'Bye bye',
      success:'Berhasil logout',
      error:''
    }
  }

  return options
}