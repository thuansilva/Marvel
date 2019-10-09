import axios from 'axios';
import md5 from 'md5';

const PUBLIC = process.env.PUBLIC;
const PRIVATE = process.env.PRIVATE;

const ts = Number(new Date());
const crypto = md5(ts + PRIVATE + PUBLIC);

const api = axios.create({
  baseURL: `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC}&hash=${crypto}`,
  timeout: 5000,
  method: 'get',
  responseType: 'json',
});

export default api;
