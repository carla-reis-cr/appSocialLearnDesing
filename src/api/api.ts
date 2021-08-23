import axios from 'axios';

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  //baseURL: "http://localhost:3000",
  timeout: 15000,
  baseURL: "http://192.168.0.106:3000", 
});

export default api;