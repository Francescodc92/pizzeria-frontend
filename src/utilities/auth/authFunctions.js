import { apiRequest } from "../axios/axiosInstance";
import { store } from "../../store";
import { setDataInLocalStorage } from "../localStorage/localStorageHelper";

export const register = async (formData) => {
  let message = "";
  await apiRequest.post("/api/register", formData).then((response) => {
    message = response.data.message;
  });

  return message;
};

export const getSanctumToken = async () => {
  await apiRequest.get("/sanctum/csrf-cookie");
};

export const login = async (formData) => {
  let message = "";
  let token = false;
  await getSanctumToken().then(() => {
    token = true;
  });

  if (token) {
    await apiRequest.post("/api/login", formData).then((response) => {
      store.user = response.data.data;
      setDataInLocalStorage("user", response.data.data);

      message = response.data.message;
    });
  }

  return message;
};

export const logout = async () => {
  let message = "";
  await apiRequest.post("/api/logout").then((response) => {
    store.user = null;
    setDataInLocalStorage("user", null);
    message = response.data.message;
  });

  return message;
};
