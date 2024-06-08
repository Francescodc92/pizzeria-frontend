<script setup>
import { store } from "../../store.js"
import { ref } from "vue"
import { formatCurrency } from "../../utilities/formatValue/formatCurrency"
import OrderPizzaComponent from "./OrderPizzaComponent.vue";
const { order } = defineProps({
  order: Object,
  required: true
})


const statusColors = ref({
  'pending': 'bg-primary',
  'processing': 'bg-yellow-400',
  'shipped': 'bg-blue-400',
  'completed': 'bg-green-400'
})


</script>

<template v-if="store.orderModalOpen && order !== null">
  <div class="w-full h-screen fixed inset-0 bg-black/70 z-30 flex items-center justify-center px-2">
    <button
      class="bg-primary text-white px-3 py-1 rounded absolute top-8 right-8 uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
      @click="store.orderModalOpen = false">
      X
    </button>
    <div class="w-full max-w-[1200px] max- bg-white py-10 px-4 md:px-10 rounded shadow-lg">
      <h2 class="text-center text-2xl text-gray-500 uppercase mt-6">Dettagli ordine n <span class="text-primary">{{
        order.id }}</span></h2>
      <div class="w-full py-5 px-2 flex flex-col md:flex-row border-t-2 border-b-2 border-primary rounded-2xl">
        <div class="w-full md:w-1/2  p-2">
          <h3 class="text-primary uppercase">Dettagli spedizione</h3>
          <p>Contatti</p>
          <p class="text-gray-500">{{ order.user.phoneNumber }}</p>
          <p class="text-gray-500">{{ order.user.email }}</p>
          <p class="text-gray-500">
            {{ order.address.road }}, {{ order.address.city }}, {{ order.address.zipCode }} {{ order.address.country }}
          </p>
        </div>

        <div class="w-full md:w-1/2 border-t-2 md:border-t-0 md:border-l-2 border-primary p-2">
          <h3 class="text-primary uppercase">Dati ordine</h3>
          <div class="flex justify-end">
            <span class="py-1 px-2 font-bold text-white rounded text-right" :class="statusColors[order.status]">
              {{ order.orderStatusTranslated[order.status] }}
            </span>
          </div>
          <div class="flex justify-between pt-4">
            <div>
              <p>Data Ordine</p>
              <p class="text-gray-500">{{ order.orderDateForHuman }}</p>
            </div>
            <div>
              <p>Prezzo Ordine</p>
              <p class="text-primary">
                {{ formatCurrency(order.orderPrice) }}
              </p>
            </div>
          </div>
        </div>

      </div>

      <div
        class="w-full py-5 px-2 flex flex-col md:flex-row border-t-2 border-b-2 border-primary rounded-2xl mt-3 overflow-y-auto">

        <div class="w-full p-2">
          <h3 class="text-primary uppercase text-center">Pizze dell'ordine</h3>

          <div class="h-[200px] overflow-y-auto">
            <OrderPizzaComponent v-for="pizza in order.pizzas" :key="pizza.id" :pizza="pizza" />
          </div>


        </div>

      </div>
    </div>
  </div>
</template>

<style scoped></style>
