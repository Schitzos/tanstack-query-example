import axios from 'axios';

export default function AxiosAdapters(options: any) {
  return axios(options).then(res => res.data);
}
