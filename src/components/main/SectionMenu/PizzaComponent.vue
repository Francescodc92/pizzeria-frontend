<script setup>
import { formatCurrency } from "../../../utilities/formatValue/formatCurrency";
const { pizzaObj } = defineProps({
  pizzaObj: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="py-10">
    <router-link :to="{ name: 'single-pizza', params: { id: pizzaObj.id } }"
      class="pizza border border-primary/50  overflow-hidden block cursor-pointer hover:border-primary rounded-md">
      <div class="w-full h-[350px] relative">
        <img class="w-full h-full object-cover object-center" :src="pizzaObj.fullImagePath" :alt="pizzaObj.name" />
        <span v-if="pizzaObj.discountPercent"
          class="absolute top-4 right-3 h-12 w-12 flex items-center justify-center bg-primary text-md font-bold rounded-full text-white">
          -{{ pizzaObj.discountPercent }}%
        </span>
      </div>
      <div class="text-center text-lg mt-3">
        <h3 class="uppercase text-[#b68a2c]">
          {{ pizzaObj.name }}
        </h3>

        <span class="px-2 py-1 font-bold text-gray-500 line-through" v-if="pizzaObj.discountPercent">
          {{ formatCurrency(pizzaObj.price) }}
        </span>
        <span class="px-2 py-1 font-bold text-primary">
          {{ formatCurrency(pizzaObj.priceAfterDiscount) }}
        </span>
      </div>
    </router-link>
  </div>
</template>

<style scoped></style>
