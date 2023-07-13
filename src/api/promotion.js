import axios from "axios";
import { baseUrl } from "../common/global";

axios.defaults.baseURL = baseUrl;

export const readAllPromotions = (classification) => {
  if (classification === 0) {
    return axios.get("/api/promotions");
  }
  return axios.get(
    "/api/promotions/classification/?classification=" + classification
  );
};

export const readOnePromotion = (objectId) => {
  return axios.get(`/api/promotion/${objectId}`);
};

export const readSomePromotions = (skip, limit, classification) => {
  if (classification === 0) {
    return axios.get(`/api/promotions/some/?skip=${skip}&limit=${limit}`);
  } else {
    return axios.get(
      `/api/promotions/some/classification/?skip=${skip}&limit=${limit}&classification=${classification}`
    );
  }
};
