import { reactive } from "vue";

export const store = reactive({
  pizzas: [],
  user: null,
  loginOpen: false,
});
