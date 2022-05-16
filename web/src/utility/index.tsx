import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 10000,
});

const db: any = {
  token: localStorage.getItem("token"),
};

export const setToken = (token: string) => {
  db.token = token;
  localStorage.setItem("token", token);
};

instance.interceptors.request.use(
  (config: any) => {
    // Do something before request is sent
    const token = db.token;

    config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
