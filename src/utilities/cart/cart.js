import { store } from "../../store";
import {
  getDataFromLocalStorage,
  setDataInLocalStorage,
} from "../../utilities/localStorage/localStorageHelper";

export const addToCart = (pizzaId, quantity) => {
  const pizzaToAdd = {
    pizzaId,
    quantity,
  };

  if (store.cart.some((pizza) => pizza.pizzaId == pizzaId)) {
    let currentQuantity = getPizzaQuantity(pizzaId);
    return setNewPizzaQuantity(pizzaId, (currentQuantity += quantity));
  }

  store.cart.push(pizzaToAdd);

  setDataInLocalStorage("cart", store.cart);
};

export const getPizzaQuantity = (pizzaId) => {
  return getDataFromLocalStorage("cart").find(
    (pizza) => pizza.pizzaId == pizzaId
  ).quantity;
};

export const setNewPizzaQuantity = (pizzaId, newQuantity) => {
  store.cart.find((pizza) => pizza.pizzaId == pizzaId).quantity = newQuantity;
  setDataInLocalStorage("cart", store.cart);
};

export function removeToCart(pizzaId) {
  store.cart = store.cart.filter((pizza) => pizza.pizzaId != pizzaId);
  setDataInLocalStorage("cart", store.cart);
}

export const getTotalPrice = (pizzaId, pizzaPrice) => {
  const quantity = getPizzaQuantity(pizzaId);
  console.log(quantity, pizzaPrice);
  return pizzaPrice * quantity;
};
