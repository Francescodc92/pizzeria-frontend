import { store } from "../../store";
import { setDataInLocalStorage } from "../../utilities/localStorage/localStorageHelper";
export const addToCart = (pizzaId, quantity) => {
  const pizzaToAdd = {
    pizzaId,
    quantity,
  };

  if (store.cart.some((pizza) => pizza.pizzaId == pizzaId)) {
    return (store.cart.find((pizza) => pizza.pizzaId == pizzaId).quantity +=
      quantity);
  }

  store.cart.push(pizzaToAdd);

  setDataInLocalStorage("cart", store.cart);
};
