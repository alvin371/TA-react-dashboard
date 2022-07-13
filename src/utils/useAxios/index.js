import axios from "axios";
import { API_URL } from "../../constants";

const getToken = JSON.parse(localStorage.getItem("token"));
export const AUTH_TOKEN = `Bearer ${getToken}`;

export const useAxios = axios.create({
  baseURL: API_URL,
});

useAxios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

export const useAxiosGet = (endpoint, config) => useAxios.get(endpoint, config);

export const useAxiosGetId = (endpoint, id, config) =>
  useAxios.get(`${endpoint}/${id}`, config);

export const useAxiosPost = (endpoint, data, config) =>
  useAxios.post(endpoint, data, config);

export const useAxiosPut = (endpoint, id, data, config) =>
  useAxios.put(`${endpoint}/${id}`, data, config);

export const useAxiosDelete = (endpoint, id, config) =>
  useAxios.delete(`${endpoint}/${id}`, config);
