import axios from "axios";
import { baseUrl } from "../common/global";

axios.defaults.baseURL = baseUrl;

export const readAllNotices = () => {
  return axios.get("/api/notices");
};

export const readSomeNotices = (skip, limit) => {
  return axios.get(`/api/notices/some/?skip=${skip}&limit=${limit}`);
};
