import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5002/', // Replace with your API base URL
  timeout: 10000, // Adjust timeout as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
