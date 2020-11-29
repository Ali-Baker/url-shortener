import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const Api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const all = () => Api.get('/all');

export const shorten = (fullUrl: string) => Api.post('/shorten', {
  fullUrl,
});

export default {};
