import axios from "axios";

export const apiRequest = axios.create({
  baseURL: "http://localhost",
  withCredentials: true,
  withXSRFToken: true,
});
