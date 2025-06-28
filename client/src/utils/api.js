// src/utils/api.js

import axios from 'axios';

const API = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:6001'
      : process.env.REACT_APP_API_BASE_URL || '',
  withCredentials: false,
});

export default API;
