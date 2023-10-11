import axios from 'axios';

export default function AxiosAdapters(options: any) {
  return axios(options)
    .then(res => res.data)
    .catch(error=>{
      console.log(error)
    })
}
