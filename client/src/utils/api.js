import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:6001'
    : '',
  withCredentials: false,
});


export default API;
