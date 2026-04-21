import axios from 'axios';

// In Expo, localhost refers to the device itself.
// To connect to a local backend on your computer, you should use your computer's local IP address
// e.g., 'http://192.168.1.X:8000/api' or standard loopback for iOS emulator.
// We are setting a default placeholder that you will need to update based on your network.
const API_URL = 'http://10.0.2.2:8000/api'; // Default for Android Emulator to access localhost

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default api;
