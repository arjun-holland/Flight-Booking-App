// src/utils/api.js

import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: false,
});

// const API = axios.create({
//   baseURL:
//     process.env.NODE_ENV === 'development'
//       ? 'http://localhost:6001'
//       : process.env.REACT_APP_API_URL|| '',  //add the backend url as the value for the REACT_APP_API_URL in environmental variables
//   withCredentials: false,
// });


export default API;
