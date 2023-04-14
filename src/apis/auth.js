import { authInstance } from "./utils";

export const signUpApi = async (email, password) => {
  return authInstance.post(`/auth/signup`, { email, password });
};

export const signInApi = async (email, password) => {
  return authInstance.post(`/auth/signin`, { email, password });
};