<script setup>
import { apiRequest } from "../../utilities/axios/axiosInstance.js";
import { store } from "../../store.js";
import OrderModal from "./OrderModal.vue";
import { onMounted, ref } from "vue";
import { formatCurrency } from "../../utilities/formatValue/formatCurrency";
let orders = ref([]);
let firstPage = ref(1)
let currentPage = ref(1)
let lastPage = ref(0)
let loading = ref(false)

let selectedOrder = ref(null);
const statusColors = ref({
  'pending': 'text-primary',
  'processing': 'text-yellow-600',
  'shipped': 'text-blue-600',
  'completed': 'text-green-600'
})

const getOrders = (button) => {
  if (button == "prev") {
    currentPage.value = currentPage.value - 1;
  } else if (button == "next") {
    currentPage.value = currentPage.value + 1;
  } else {
    loading.value = true
  }

  apiRequest.get(`/api/orders?page=${currentPage.value}`).then((response) => {
    orders.value = response.data.data;
    lastPage.value = response.data.meta.last_page;
    setTimeout(() => {
      loading.value = false
    }, 300);
  })
};

const openOrderModal = (order) => {
  selectedOrder.value = order
  store.orderModalOpen = true
}

onMounted(() => getOrders());



</script>

<template>
  <div class="h-[300px] flex items-center justify-center" v-if="loading">
    <div
      class="inline-block h-20 w-20  animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-primary"
      role="status">
      <span
        class="!absolute  !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
    </div>
  </div>
  <div class="max-w-6xl mx-auto px-3 relative min-h-[300px]" v-else>
    <h2 class=" text-center text-3xl uppercase my-5 text-primary font-bold">Ordini</h2>
    <div
      class="relative border-t-2 border-b-2 border-primary rounded-2xl pt-5 bg-white my-5 shadow-xl shadow-black/20 overflow-hidden">

      <div class="h-[350px] overflow-y-auto px-2">
        <table class="w-full px-2">
          <thead class="sticky top-0 bg-gray-200 text-xs md:text-sm text-gray-700 uppercase px-2">
            <tr>
              <th scope="col" class="py-5 px-2 text-center md:text-start hidden md:table-cell">
                #Id Ordine
              </th>

              <th scope="col" class="py-5 px-2 text-center md:text-start hidden sm:table-cell">
                N* pizze
              </th>
              <th scope="col" class="py-5 px-2 text-center md:text-start ">
                Data Ordine
              </th>
              <th scope="col" class="py-5 px-2 text-center md:text-start ">
                Stato
              </th>
              <th scope="col" class="py-5 px-2 text-center md:text-start ">
                Prezzo Totale
              </th>
            </tr>
          </thead>
          <tbody class="text-sm md:text-lg">
            <template v-for="order in orders" :key="order.id">
              <tr @click="openOrderModal(order)"
                class="py-2 border-b border-gray-300 hover:border-primary cursor-pointer">
                <td class="py-4 md:py-3 px-2 text-black/80 hidden md:table-cell">{{ order.id }}</td>
                <td class="py-4 md:py-3 px-2 text-black/80 hidden sm:table-cell">{{ order.pizzas.length }}</td>
                <td class="py-4 md:py-3 px-2 text-black/80 ">{{ order.orderDateForHuman }}</td>
                <td class="py-4 md:py-3 px-2 text-black/80">
                  <span class=" px-2 md:px-3 py-1 rounded " :class="statusColors[order.status]">
                    {{ order.orderStatusTranslated[order.status] }}
                  </span>
                </td>
                <td class="py-4 md:py-3 px-2  text-primary text-center">{{ formatCurrency(order.orderPrice) }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div
        class="flex items-center justify-between lg:justify-center gap-3 py-3 px-3 sticky bottom-0 bg-white md:static border-t border-primary"
        v-if="lastPage != 1">
        <button
          class="bg-primary text-white px-5 py-2 rounded text-sm cursor-pointer disabled:opacity-50 disabled:cursor-auto uppercase"
          @click="getOrders('prev')" :disabled="currentPage == firstPage">
          prev
        </button>
        <button
          class="bg-primary text-white px-5 py-2 rounded text-sm cursor-pointer disabled:opacity-50 disabled:cursor-auto uppercase"
          @click="getOrders('next')" :disabled="currentPage == lastPage">
          next
        </button>
      </div>


    </div>

    <OrderModal v-if="store.orderModalOpen && selectedOrder" :order="selectedOrder" />
  </div>
</template>

<style scoped></style>
