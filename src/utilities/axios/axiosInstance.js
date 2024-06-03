import axios from "axios";
import { toast } from "../toast/toastInstance";

const apiRequest = axios.create({
  baseURL: "http://localhost",
  withCredentials: true,
  withXSRFToken: true,
});

apiRequest.interceptors.response.use(
  (response) => response,
  (error) => {

    if(error.response.status == 401) {
      return Promise.reject(error);
    }
    if (error.response.data.message) {
      toast.error(error.response.data.message, {
        position: "top-right",
      });
    } else if (error.response.data.error) {
      
      toast.error(error.response.data.error, {
        position: "top-right",
      });
    }

    return Promise.reject(error);
  }
);

export { apiRequest };
