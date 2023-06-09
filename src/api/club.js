import axios from "axios";
import { baseUrl } from "../common/global";

axios.defaults.baseURL = baseUrl;

export const readAllClubs = (classification) => {
  if (classification === 0) {
    return axios.get("/api/clubs");
  } else {
    return axios.get(
      "/api/clubs/classification/?classification=" + classification
    );
  }
};

export const readSomeClubs = (skip, limit, classification) => {
  if (classification === 0) {
    return axios.get(`/api/clubs/some/?skip=${skip}&limit=${limit}`);
  } else {
    return axios.get(
      `/api/clubs/some/classification/?skip=${skip}&limit=${limit}&classification=${classification}`
    );
  }
};

export const readOneClub = (objectId) => {
  return axios.get(`/api/club/${objectId}`);
};

export const searchAllClubs = (query, classification) => {
  if (classification === 0) {
    return axios.get(`/api/clubs/search/?query=${query}`);
  }
  return axios.get(
    `/api/clubs/search/classification/?query=${query}&classification=${classification}`
  );
};
