import { store } from "../../store";
import {
  getDataFromLocalStorage,
  setDataInLocalStorage,
} from "../../utilities/localStorage/localStorageHelper";

export const addToCart = (pizzaElement, quantity) => {
  const pizzaToAdd = {
    pizzaElement,
    quantity,
    totalPrice: 0,
    initialPrice: pizzaElement.priceAfterDiscount,
  };

  if (store.cart.some((pizza) => pizza.pizzaElement.id == pizzaElement.id)) {
    let currentQuantity = getPizzaQuantity(pizzaElement.id);
    let newPizzaQuantity = currentQuantity + quantity;
    return updatePizza(pizzaElement.id, newPizzaQuantity);
  }

  store.cart.push(pizzaToAdd);
  pizzaToAdd.totalPrice = updatePizzaTotalPrice(
    pizzaElement.id,
    pizzaElement.priceAfterDiscount,
    quantity
  );

  setDataInLocalStorage("cart", store.cart);
};

export const getPizzaQuantity = (pizzaId) => {
  const cartItems = getDataFromLocalStorage("cart") || [];
  const pizza = cartItems.find((pizza) => pizza.pizzaElement.id == pizzaId);
  if (!pizza) return 0;
  return pizza.quantity;
};

export const updatePizza = (pizzaId, newQuantity) => {
  const pizzaToUpdate = store.cart.find((pizza) => {
    return pizza.pizzaElement.id == pizzaId;
  });

  if (!pizzaToUpdate) return;
  pizzaToUpdate.quantity = newQuantity;
  pizzaToUpdate.totalPrice = updatePizzaTotalPrice(
    pizzaId,
    pizzaToUpdate.initialPrice,
    newQuantity
  );
  setDataInLocalStorage("cart", store.cart);
};

export function removeToCart(pizzaId) {
  store.cart = store.cart.filter((pizza) => pizza.pizzaElement.id != pizzaId);
  setDataInLocalStorage("cart", store.cart);
}

export const getPizzaCartIndex = (pizzaId) => {
  return store.cart.findIndex((pizza) => pizza.pizzaElement.id == pizzaId);
};

export const getPizzaTotalPrice = (pizzaId) => {
  if (store.cart.length == 0) return 0;
  const pizza = store.cart.find((pizza) => {
    return pizza.pizzaElement.id == pizzaId;
  });

  return pizza.totalPrice;
};

export const updatePizzaTotalPrice = (pizzaId, initialPrice, quantity) => {
  const pizza = store.cart.find((pizza) => {
    return pizza.pizzaElement.id == pizzaId;
  });

  if (!pizza) return;

  return (pizza.totalPrice = initialPrice * quantity);
};

export const getCartTotalPrice = () => {
  let totalPrice = 0;
  store.cart.forEach((pizza) => {
    totalPrice += getPizzaTotalPrice(pizza.pizzaElement.id);
  });
  return totalPrice;
};
