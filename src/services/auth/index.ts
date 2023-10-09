
export function login() {
  const options = {
    url:'https://apidev.econosphere.id/ec2/adminapp/v1/admins/auth/signin',
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  return options
}