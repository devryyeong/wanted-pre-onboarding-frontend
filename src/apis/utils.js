import axios from "axios";

const BASE_URL = "https://www.pre-onboarding-selection-task.shop";

const baseApi = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });

  instance.interceptors.response.use((response) => response, (error) => {
    if (error.response?.status === 401) {
      //API endpoint 오류 처리
      console.log("Not Found");
    }
    return Promise.reject(error);
  });
  return instance;
};

const authApi = (url) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use((config) => {
    const token = window.localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('token겟챠')
    }
    console.log('이게실행은되는가')
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
    if (error.response?.status === 400) {
      // 인증 오류 처리
      console.log("Unauthorized");
    } else if (error.response?.status === 404) {
      // API endpoint 오류 처리
      console.log("Not Found");
    }
    return Promise.reject(error);
  });

  return instance;
};

export const baseInstance = baseApi(BASE_URL);
export const authInstance = authApi(BASE_URL);