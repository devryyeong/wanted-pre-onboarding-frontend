import { authApi } from "./utils";

export const signUpApi = async (email, password) => {
  return authApi.post(`/auth/signup`, { email, password });
};

export const signInApi = async (email, password) => {
  return authApi.post(`/auth/signin`, { email, password });
};