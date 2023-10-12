import axios from 'axios';
import AxiosAdapter from '@utils/axiosAdapter';

export async function getArticle() {
  const options = {
    url:'https://jsonplaceholder.typicode.com/posts',
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-type': 'basic',
    }
  }
  return AxiosAdapter(options)
}

export async function getComment() {
  const options = {
    url:'https://jsonplaceholder.typicode.com/comments',
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-type': 'basic',
    }
  }
  return AxiosAdapter(options)
}

export async function getDetailArticle(id:string) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return res.data;
}

export async function getCommentArticle(id:string) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return res.data;
}
