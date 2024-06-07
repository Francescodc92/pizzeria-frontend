<script setup>
import { apiRequest } from "../../utilities/axios/axiosInstance.js";
import { onMounted, ref } from "vue";
import { formatCurrency } from "../../utilities/formatValue/formatCurrency";
let orders = ref([]);
const statusColors = ref({
  'pending': 'bg-primary',
  'processing': 'bg-yellow-400',
  'shipped': 'bg-blue-400',
  'completed': 'bg-green-400'
})

onMounted(() => {
  apiRequest.get("/api/orders").then((response) => {
    orders.value = response.data.data;
  })
});

</script>

<template>
  <div class="max-w-6xl mx-auto px-3 relative min-h-[300px]">
    <button @click="goBack"
      class="absolute top-0 left-0 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-md">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </button>
    <h2 class=" text-center text-3xl uppercase my-5 text-primary font-bold">Ordini</h2>
    <div
      class="relative border-t-2 border-b-2 border-primary rounded-2xl px-2 py-5 bg-white my-5 shadow-xl shadow-black/20">

      <div class="h-[300px] overflow-y-auto ">
        <table class="w-full">
          <thead class="sticky -top-1 bg-gray-200 text-xs md:text-sm text-gray-700 uppercase px-2">
            <tr>
              <th scope="col" class="py-5 text-center md:text-start border-b border-primary hidden md:table-cell">
                #Id Ordine
              </th>

              <th scope="col" class="py-5 text-center md:text-start border-b border-primary hidden sm:table-cell">
                N* pizze
              </th>
              <th scope="col" class="py-5 text-center md:text-start border-b border-primary ">
                Data Ordine
              </th>
              <th scope="col" class="py-5 text-center md:text-start border-b border-primary ">
                Stato
              </th>
              <th scope="col" class="py-5 text-center md:text-start border-b border-primary ">
                Prezzo Totale
              </th>
            </tr>
          </thead>
          <tbody class="text-sm md:text-lg">
            <tr v-for="order in orders" :key="order.id"
              class="py-2 border-b border-gray-300 hover:border-primary cursor-pointer">
              <td class="py-4 md:py-3 hidden md:table-cell">{{ order.id }}</td>
              <td class="py-4 md:py-3 hidden sm:table-cell">{{ order.pizzas.length }}</td>
              <td class="py-4 md:py-3 ">{{ order.order_date_forHumans }}</td>
              <td class="py-4 md:py-3">
                <span class="text-white px-2 md:px-3 py-1 rounded" :class="statusColors[order.status]">
                  {{ order.order_statuses[order.status] }}
                </span>
              </td>
              <td class="py-4 md:py-3 text-primary text-center">{{ formatCurrency(order.order_price) }}</td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>

  </div>

</template>

<style scoped></style>
