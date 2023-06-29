import axios from "axios";

const BASE_URL = "https://www.pre-onboarding-selection-task.shop";

const baseApi = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });

  instance.interceptors.response.use((response) => response, (error) => {
    if (error.response?.status === 401) {
      console.log("Not Found");
    }
    return Promise.reject(error);
  });
  return instance;
};

export const authApi = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
});

authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})

export const baseInstance = baseApi(BASE_URL);