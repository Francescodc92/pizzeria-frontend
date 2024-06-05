<script setup>
import { useRoute, useRouter } from 'vue-router'
import { addToCart } from '../utilities/cart/cart.js'
import { formatCurrency } from '../utilities/formatValue/formatCurrency.js';
import { ref, watch } from "vue";
import { apiRequest } from "../utilities/axios/axiosInstance.js";
import { toast } from "../utilities/toast/toastInstance.js";
import QuantityButtons from '../components/QuantityButtons.vue';

const route = useRoute()
const router = useRouter()
const pizzaId = ref(route.params.id)
const pizza = ref({})
const quantity = ref(1)

const getPizza = () => {
  apiRequest.get(`/api/pizzas/${pizzaId.value}`)
    .then((response) => {
      pizza.value = response.data.data
    })
    .catch((error) => {
      console.log(error)
      toast.error("pizza non trovata ", {
        position: "top-right",
      });
      router.push({ name: 'pizzas' })
    })
}

const changeQuantity = (button) => {
  if (button == "decrement") {
    if (quantity.value > 1) {
      quantity.value = quantity.value - 1
    }
  } else if (button == "increment") {
    quantity.value = quantity.value + 1
  }
}

const addPizzaToCart = (pizzaId) => {
  addToCart(pizzaId, quantity.value, pizza.value.priceAfterDiscount)
  toast.success("pizza aggiunta al carrello", {
    position: "top-right"
  });
}

const goBack = () => {
  router.go(-1)
}

watch(() => route.params.id, () => {
  pizzaId.value = route.params.id;

  getPizza();
}, { immediate: true });

</script>

<template>
  <div class="max-w-6xl mx-auto md:flex my-10 min-h-[350px] px-3 relative pt-10 ">
    <button @click="goBack"
      class="absolute -top-2 left-2 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-md">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </button>
    <div class="max-h-[350px] rounded-t-md md:rounded-md md:w-1/2 overflow-hidden relative">
      <img class="w-full max-h-full object-contain object-center" :src="pizza.fullImagePath" :alt="pizza.name" />

      <span
        class="text-white font-semibold absolute top-3 right-4 lg:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-primary">-{{
          pizza.discountPercent }}%
      </span>

    </div>
    <div class=" text-lg px-3 flex flex-col md:w-1/2 ">
      <div class="flex-1 flex flex-col gap-2 pt-5">
        <h3 class="uppercase text-[#b68a2c] text-3xl text-center mb-4">
          {{ pizza.name }}
        </h3>
        <p>{{ pizza.description }}</p>
        <div class="flex justify-center md:justify-start">
          <span class=" py-1 px-2 font-bold text-gray-500 line-through" v-if="pizza.discountPercent">
            {{ formatCurrency(pizza.price) }}
          </span>
          <span class=" py-1 font-bold text-primary">
            {{ formatCurrency(pizza.priceAfterDiscount) }}
          </span>
        </div>

      </div>

      <div class="flex flex-col sm:flex-row gap-5 items-center justify-center md:justify-start py-6">
        <button @click="addPizzaToCart(pizza.id)"
          class="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded text-sm cursor-pointer order-2 sm:order-1">
          Aggiungi
          al carrello
        </button>

        <div class=" flex items-center gap-3 order-1 mt-2 sm:mt-0 sm:order-2">
          <label for="quantity">quantità</label>
          <QuantityButtons @changeQuantity="changeQuantity" :quantity="quantity" />
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped></style>
