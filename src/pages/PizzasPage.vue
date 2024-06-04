<script setup>
import { apiRequest } from "../utilities/axios/axiosInstance.js";
import { addToCart } from "../utilities/cart/cart.js";
import { toast } from "../utilities/toast/toastInstance.js";
import { formatCurrency } from "../utilities/formatValue/formatCurrency.js"
import { reactive, ref, onMounted } from "vue";
let pizzas = ref([]);
let firstPage = ref(1)
let currentPage = ref(1)
let lastPage = ref(0)

const getPizzas = (button) => {

  if (button == "prev") {
    currentPage.value = currentPage.value - 1;
  } else if (button == "next") {
    currentPage.value = currentPage.value + 1;
  }
  apiRequest
    .get(`/api/pizzas?page=${currentPage.value}`)
    .then((response) => {
      pizzas.value = response.data.data;
      lastPage.value = response.data.meta.last_page;
    })
};

const addPizzaToCart = (pizzaId) => {
  addToCart(pizzaId, 1)
  toast.success("pizza aggiunta al carrello", {
    position: "top-right"
  });
}

onMounted(() => getPizzas());
</script>

<template>
  <div class="max-w-6xl mx-auto px-3">
    <h2 class=" text-center text-3xl uppercase my-5 text-primary font-bold">Menu</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-5 gap-x-3">

      <template v-for="(pizza, index) in pizzas" :key="index">
        <div class=" border border-primary/30 cursor-pointer hover:border-primary rounded-md ">
          <router-link :to="{ name: 'single-pizza', params: { id: pizza.id } }">
            <div class="h-[250px] relative">
              <img class="w-full h-full object-contain object-center" :src="pizza.fullImagePath" :alt="pizza.name" />
              <span v-if="pizza.discountPercent"
                class="absolute top-4 right-3 h-12 w-12 flex items-center justify-center bg-primary text-md font-bold rounded-full text-white">
                -{{ pizza.discountPercent }}%
              </span>
            </div>
            <div class="text-center text-lg mt-3">
              <h3 class="uppercase text-[#b68a2c]">
                {{ pizza.name }}
              </h3>

              <span class="px-2 py-1 font-bold text-gray-500 line-through" v-if="pizza.discountPercent">
                {{ formatCurrency(pizza.price) }}
              </span>
              <span class="px-2 py-1 font-bold text-primary">
                {{ formatCurrency(pizza.priceAfterDiscount) }}
              </span>
            </div>
          </router-link>
          <div class="flex items-center justify-center gap-3 py-3">
            <button @click="addPizzaToCart(pizza.id)"
              class="bg-primary text-white px-5 py-2 rounded text-sm cursor-pointer">Aggiungi al carrello</button>
          </div>

        </div>
      </template>
    </div>
    <div
      class="flex items-center justify-between lg:justify-center gap-3 py-3 lg:py-5 sticky bottom-0 bg-white md:static"
      v-if="lastPage != 1">
      <button
        class="bg-primary text-white px-5 py-2 rounded text-sm cursor-pointer disabled:opacity-50 disabled:cursor-auto uppercase"
        @click="getPizzas('prev')" :disabled="currentPage == firstPage">
        prev
      </button>
      <button
        class="bg-primary text-white px-5 py-2 rounded text-sm cursor-pointer disabled:opacity-50 disabled:cursor-auto uppercase"
        @click="getPizzas('next')" :disabled="currentPage == lastPage">
        next
      </button>
    </div>

  </div>
</template>

<style scoped></style>
