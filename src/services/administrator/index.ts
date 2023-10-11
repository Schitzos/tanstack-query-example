import AxiosAdapter from '@utils/axiosAdapter';

export async function getListAdmin() {
  const options = {
    url: '/api/admins', // Note that there are no query parameters here
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    params: { page: 1, size: 10 }, // Specify query parameters in the params object
  }
  return AxiosAdapter(options);
}
