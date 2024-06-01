import { apiRequest } from "../axios/axiosInstance";
import { toast } from "../toast/toastInstance";
import { store } from "../../store";

export const register = (formData) => {
  apiRequest.post("/api/register", formData).then((response) => {
    toast.success(response.data.message, {
      position: "top-right",
    });

    store.loginModalOpen = true;
    store.registerModalOpen = false;
  });
};
