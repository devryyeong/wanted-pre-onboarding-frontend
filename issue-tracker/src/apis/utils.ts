import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://api.github.com/';

const axiosApi = (url: string) => {
  const axiosInstance = axios.create({
    baseURL: url,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
    timeout: 2000,
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.statue === 404) {
        console.log("NOT FOUND");
      } else {
        console.log("ERROR");
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}


export const axiosInstance = axiosApi(BASE_URL);