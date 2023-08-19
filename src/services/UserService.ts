import { LoginProps, RegisterProps } from "@/interfaces/interfaces";
import http from "./httpService";

export const register = async ({
  fullName,
  email,
  password,
}: RegisterProps) => {
  return await http
    .post(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, {
      fullName,
      email,
      password,
    })
    .then((res) => res);
};

export const login = async ({ email, password }: LoginProps) => {
  return await http
    .post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
      email,
      password,
    })
    .then((res) => res);
};

export const getProfile = async () => {
  return await http.get("/user/profile").then((res) => res.data);
};

export const userLogout = async () => {
  return await http.get("/user/logout").then((res) => res.data);
};
