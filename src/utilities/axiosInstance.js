import axios from "axios";

export const apiRequest = axios.create({
  baseURL: "http://localhost/api",
  withCredentials: true,
  withXSRFToken: true,
});
