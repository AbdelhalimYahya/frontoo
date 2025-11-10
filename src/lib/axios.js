import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://backoo-production.up.railway.app",
  withCredentials: true,
});