<script setup>
import { store } from "../../store.js";
import CartPizzaComponent from "./CartPizzaComponent.vue";
import { formatCurrency } from "../../utilities/formatValue/formatCurrency";
import { getCartTotalPrice } from "../../utilities/cart/cart.js";
import { ref, watch } from "vue";
let cartItems = ref(store.cart);

watch(() => store.cart, () => {
  cartItems.value = store.cart
}, { deep: true })

const closeModal = () => store.cartModalOpen = false

</script>

<template>
  <div
    class="fixed top-0 z-50 h-screen bg-slate-200 w-full max-w-[700px] transition-all duration-300 lg:border-s-2 lg:border-primary overflow-y-auto pt-10"
    :class="store.cartModalOpen ? 'right-0' : '-right-full'">
    <button @click="closeModal()"
      class="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded text-sm cursor-pointer order-2 sm:order-1 absolute top-3 right-5 z-50">
      X
    </button>
    <h1 class="text-3xl font-bold text-primary text-center">Carrello</h1>

    <template v-if="store.cart.length > 0">
      <CartPizzaComponent v-for="pizza in cartItems" :key="pizza.pizzaId" :pizzaId="pizza.pizzaId"
        :pizzaQuantity="pizza.quantity" />

      <div class="fixed bottom-0 w-full bg-slate-600 text-white">
        <div>
          <span>Totale:</span>
          <p>{{ formatCurrency(getCartTotalPrice()) }}</p>
        </div>
      </div>
    </template>
    <h3 v-else class="text-center text-2xl text-gray-500 uppercase mt-6">Il carrello è vuoto</h3>
  </div>
</template>

<style scoped></style>
