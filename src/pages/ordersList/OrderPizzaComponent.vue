<script setup>
import { formatCurrency } from "../../utilities/formatValue/formatCurrency";
const { pizza } = defineProps({
  pizza: {
    type: Object,
    required: true,
  }
});

</script>

<template>
  <div class="flex flex-col sm:flex-row sm:items-center gap-3 flex-1 py-3 border-b border-primary">
    <div class="w-[80px] h-[80px] relative self-center">
      <img class="w-full h-full object-cover object-center" :src="pizza.fullImagePath" :alt="pizza.name" />
    </div>
    <div class="text-lg ps-5 flex flex-col gap-1 flex-1">
      <h3 class="uppercase text-[#b68a2c] hover:text-[#a58237] text-center sm:text-start">
        {{ pizza.name }}
      </h3>
      <div class="flex justify-between gap-1 w-full">
        <div class="flex flex-col">
          <div class="flex flex-col md:flex-row md:gap-2 md:items-center">
            <span class="font-bold text-gray-500 line-through text-sm" v-if="pizza.discountPercent">
              {{ formatCurrency(pizza.price) }}
            </span>
            <span class="font-bold text-primary">
              {{ formatCurrency(pizza.priceAfterDiscount) }}
            </span>
          </div>
          <p class="font-bold text-gray-500 capitalize text-sm">
            quantità: <span class=" font-bold text-primary">{{ pizza.quantity }}</span>
          </p>
        </div>
        <div class="pe-3 flex flex-col">

          <p>
            Tot: <span class=" font-bold text-primary">{{ formatCurrency(pizza.quantity *
              pizza.priceAfterDiscount) }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
