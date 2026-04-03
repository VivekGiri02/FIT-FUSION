import axios from "axios";

const API = axios.create({
  baseURL: "https://fit-fusion-ex.onrender.com/api",
});

// Auto token attach
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
