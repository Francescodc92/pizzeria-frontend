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
      <img class="w-full h-full object-cover object-center" :src="pizza.full_image_path" :alt="pizza.name" />
    </div>
    <div class="text-lg ps-5 flex flex-col gap-1 flex-1">
      <h3 class="uppercase text-[#b68a2c] hover:text-[#a58237]">
        {{ pizza.name }}
      </h3>
      <div class="flex justify-between gap-1 w-full">
        <div class="flex flex-col">
          <div class="flex gap-2 items-center">
            <span class="font-bold text-gray-500 line-through text-sm" v-if="pizza.discount_percent">
              {{ formatCurrency(pizza.price) }}
            </span>
            <span class="font-bold text-primary">
              {{ formatCurrency(pizza.price_after_discount) }}
            </span>
          </div>
          <p class="font-bold text-gray-500 capitalize text-sm">
            quantità: <span class=" font-bold text-primary">{{ pizza.pivot.quantity }}</span>
          </p>
        </div>
        <div class="pe-3 flex flex-col">

          <p>
            Tot: <span class=" font-bold text-primary">{{ formatCurrency(pizza.pivot.quantity *
              pizza.price_after_discount) }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
