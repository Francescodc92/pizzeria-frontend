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
    class="fixed top-0 z-50 h-screen bg-slate-200 w-full max-w-[700px] transition-all duration-300 lg:border-s-2 lg:border-primary pt-10"
    :class="store.cartModalOpen ? 'right-0' : '-right-full'">

    <button @click="closeModal()"
      class="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded text-sm cursor-pointer order-2 sm:order-1 absolute top-3 right-5 z-50">
      X
    </button>

    <h3 v-if="store.cart.length === 0" class="text-center text-2xl text-gray-500 uppercase mt-6">Il carrello è vuoto
    </h3>
    <template v-else>
      <div class="h-[70%] overflow-y-auto">
        <h1 class="text-3xl font-bold text-primary text-center">Carrello</h1>
        <CartPizzaComponent v-for="pizza in cartItems" :key="pizza.pizzaElement.id" :pizzaId="pizza.pizzaElement.id"
          :pizzaQuantity="pizza.quantity" />
      </div>

      <div class="h-[30%] flex flex-col border-t-2 border-primary rounded-t-2xl px-2 bg-white">
        <div class="p-3 py-5 border-b-[1px] border-primary flex justify-between text-xl font-semibold">
          <span>Totale:</span>
          <p>{{ formatCurrency(getCartTotalPrice()) }}</p>
        </div>
        <div class="p-3 py-5 border-b-[1px] border-primary flex justify-between text-lg font-semibold">
          <span>Elementi nel carrello:</span>
          <p>{{ store.cart.length }}</p>
        </div>
        <div class="p-3 flex items-center justify-center flex-1">
          <router-link :to="{ name: 'checkout' }"
            class="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded text-sm cursor-pointer order-2 sm:order-1">
            Procedi
            con l'acquisto
          </router-link>
        </div>
      </div>
    </template>

  </div>
</template>

<style scoped></style>
