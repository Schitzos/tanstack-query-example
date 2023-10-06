import axios from 'axios';

export async function getUser() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return res.data;
}

export async function getDetailArticle(id:number) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return res.data;
}

export async function getCommentArticle(id:number) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return res.data;
}
