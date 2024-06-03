<script setup>
import { useRoute, useRouter } from 'vue-router'
import { formatCurrency } from '../utilities/formatValue/formatCurrency.js';
import { onMounted, ref } from "vue";
import { apiRequest } from "../utilities/axios/axiosInstance.js";
import { toast } from "../utilities/toast/toastInstance.js";
const route = useRoute()
const router = useRouter()
const pizzaId = route.params.id
const pizza = ref({})

const getPizza = () => {
  apiRequest.get(`/api/pizzas/${pizzaId}`)
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

onMounted(() => getPizza());

</script>

<template>
  <div class="max-w-6xl mx-auto flex my-10 min-h-[500px]">
    <div class="h-[250px] relative">
      <img class="w-full h-full object-contain object-center" :src="pizza.fullImagePath" :alt="pizza.name" />
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
    <div class="flex items-center justify-center gap-3 py-3">
      <button @click="addToCart(pizza)" class="bg-primary text-white px-5 py-2 rounded text-sm cursor-pointer">Aggiungi
        al carrello</button>
    </div>
  </div>
</template>

<style scoped></style>
