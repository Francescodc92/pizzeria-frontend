import axios from "axios";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
const $toast = useToast();

const apiRequest = axios.create({
  baseURL: "http://localhost",
  withCredentials: true,
  withXSRFToken: true,
});

apiRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.data.message) {
      $toast.error(error.response.data.message, {
        position: "top-right",
      });
    } else if (error.response.data.error) {
      $toast.error(error.response.data.error, {
        position: "top-right",
      });
    }

    return Promise.reject(error);
  }
);

export { apiRequest };
