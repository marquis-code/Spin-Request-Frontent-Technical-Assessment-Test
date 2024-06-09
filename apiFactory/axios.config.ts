import axios from "axios";
import { useNuxtApp } from "#app";

export const axiosInstance = axios.create({
  baseURL: "https://spin-request-api-service.onrender.com",
});

axiosInstance.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error) => {
    if (typeof error.response === "undefined") {
      useNuxtApp().$toast.error("kindly check your network connection", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } else {
      useNuxtApp().$toast.error(error.response.data.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    }
  }
);
