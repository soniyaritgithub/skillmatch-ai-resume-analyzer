import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,

  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },

  timeout: 60000,

  withCredentials: false,
});

export default api;