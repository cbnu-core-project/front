import axios from "axios";
import { baseUrl } from "../common/global";

axios.defaults.baseURL = baseUrl;

export const readSomeClubs = (skip, limit, classification) => {
  if (classification === 0) {
    return axios.get(`/api/clubs/?skip=${skip}&limit=${limit}`);
  } else {
    return axios.get(
      `/api/clubs/classification/?skip=${skip}&limit=${limit}&classification=${classification}`
    );
  }
};

export const readOneClub = (objectId) => {
  return axios.get(`/api/club/${objectId}`);
};
