import { reactive } from "vue";

export const store = reactive({
  pizzas: [],
  user: null,
  loginModalOpen: false,
  registerModalOpen: false,
  modalReservationOpen: false,
});
