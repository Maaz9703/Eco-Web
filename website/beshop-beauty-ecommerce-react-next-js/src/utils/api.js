import axios from 'axios';

// Create an Axios instance with the default backend URL
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Laravel default API route
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default api;
