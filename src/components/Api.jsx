import axios from "axios";

export const Api = () => {
  return axios.get("https://fakestoreapi.com/products/");
};
