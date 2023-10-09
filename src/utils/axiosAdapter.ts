import axios from 'axios';

export default function AxiosAdapters(options: any) {
  console.log(options)
  return axios(options).then(res => res.data);
}
