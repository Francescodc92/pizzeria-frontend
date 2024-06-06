import { reactive } from "vue";
import { getDataFromLocalStorage } from "./utilities/localStorage/localStorageHelper.js";

export const store = reactive({
  pizzas: [],
  user: getDataFromLocalStorage("user") || null,
  loginModalOpen: false,
  registerModalOpen: false,
  modalReservationOpen: false,
  cartModalOpen: false,
  addressModalOpen: false,
  cart: getDataFromLocalStorage("cart") || [],
});
