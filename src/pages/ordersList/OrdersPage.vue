<script setup>
import { apiRequest } from "../../utilities/axios/axiosInstance.js";
import { store } from "../../store.js";
import OrderModal from "./OrderModal.vue";
import { onMounted, ref } from "vue";
import { formatCurrency } from "../../utilities/formatValue/formatCurrency";
let orders = ref([]);
let selectedOrder = ref(null);
const statusColors = ref({
  'pending': 'text-primary',
  'processing': 'text-yellow-600',
  'shipped': 'text-blue-600',
  'completed': 'text-green-600'
})

const openOrderModal = (order) => {
  selectedOrder.value = order
  store.orderModalOpen = true
}

onMounted(() => {
  apiRequest.get("/api/orders").then((response) => {
    orders.value = response.data.data;
  })
});



</script>

<template>
  <div class="max-w-6xl mx-auto px-3 relative min-h-[300px]">
    <h2 class=" text-center text-3xl uppercase my-5 text-primary font-bold">Ordini</h2>
    <div class="relative border-t-2 border-b-2 border-primary rounded-2xl py-5 bg-white my-5 shadow-xl shadow-black/20">

      <div class="h-[300px] overflow-y-auto px-2">
        <table class="w-full px-2">
          <thead class="sticky -top-1 bg-gray-200 text-xs md:text-sm text-gray-700 uppercase px-2">
            <tr>
              <th scope="col" class="py-5 px-2 text-center md:text-start border-b border-primary hidden md:table-cell">
                #Id Ordine
              </th>

              <th scope="col" class="py-5 px-2 text-center md:text-start border-b border-primary hidden sm:table-cell">
                N* pizze
              </th>
              <th scope="col" class="py-5 px-2 text-center md:text-start border-b border-primary ">
                Data Ordine
              </th>
              <th scope="col" class="py-5 px-2 text-center md:text-start border-b border-primary ">
                Stato
              </th>
              <th scope="col" class="py-5 px-2 text-center md:text-start border-b border-primary ">
                Prezzo Totale
              </th>
            </tr>
          </thead>
          <tbody class="text-sm md:text-lg">
            <template v-for="order in orders" :key="order.id">
              <tr @click="openOrderModal(order)"
                class="py-2 border-b border-gray-300 hover:border-primary cursor-pointer">
                <td class="py-4 md:py-3 px-2 hidden md:table-cell">{{ order.id }}</td>
                <td class="py-4 md:py-3 px-2 hidden sm:table-cell">{{ order.pizzas.length }}</td>
                <td class="py-4 md:py-3 px-2 ">{{ order.orderDateForHuman }}</td>
                <td class="py-4 md:py-3 px-2">
                  <span class=" px-2 md:px-3 py-1 rounded " :class="statusColors[order.status]">
                    {{ order.orderStatusTranslated[order.status] }}
                  </span>
                </td>
                <td class="py-4 md:py-3 px-2 text-primary text-center">{{ formatCurrency(order.orderPrice) }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>


    </div>

  </div>
  <OrderModal v-if="store.orderModalOpen && selectedOrder" :order="selectedOrder" />
</template>

<style scoped></style>
