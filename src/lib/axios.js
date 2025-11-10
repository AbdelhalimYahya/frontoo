import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "https://backoo-production.up.railway.app",
  withCredentials: true,
});