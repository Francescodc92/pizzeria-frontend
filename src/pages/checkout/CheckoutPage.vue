<script setup>
import { onMounted, ref, watch } from "vue";
import { apiRequest } from "../../utilities/axios/axiosInstance.js";
import { formatCurrency } from '../../utilities/formatValue/formatCurrency'
import { getCartTotalPrice } from '../../utilities/cart/cart'
import { store } from "../../store.js";
import PaymentComponent from "./PaymentComponent.vue";
import AddressModalComponent from "./AddressModalComponent.vue";

const tokenBraintree = ref("");
const products = ref(store.cart);
let loadingPaymentElement = ref(false)


watch(() => store.cart, () => {
  products.value = store.cart
})

// onMounted(() => {
//   loadingPaymentElement.value = true
//   apiRequest.get("/api/orders/generate/token")
//     .then((response) => {
//       loadingPaymentElement.value = false
//       tokenBraintree.value = response.data.token;
//       console.log(tokenBraintree.value)
//     })
// });
</script>

<template>

  <div class="max-w-6xl px-2 mx-auto">
    <div
      class=" flex flex-col border-t-2 border-b-2 border-primary rounded-2xl px-2 bg-white my-5 shadow-xl shadow-black/20 h-[250px]">

      <div class="px-5 py-5 border-b-[1px] border-primary font-semibold text-lg flex-1 overflow-y-auto ">
        <span class="block text-primary text-xs text-center">* Per modificare i prodotti accedi al
          carrello</span>
        <div v-for="product in products" :key="product.id" class="flex justify-between py-2 ">
          <p>
            <span class="text-primary">
              {{ product.quantity }}
            </span>
            {{ product.pizzaElement.name }}
          </p>
          <p class="text-primary">{{ formatCurrency(product.totalPrice) }}</p>
        </div>

      </div>

      <div class="p-3 py-5 flex justify-between text-xl font-semibold">
        <span>Totale:</span>
        <p>{{ formatCurrency(getCartTotalPrice()) }}</p>
      </div>

    </div>

    <!-- v-if="tokenBraintree" aggiungere -->

    <PaymentComponent :authorization="tokenBraintree" :loadingPayment="loadingPaymentElement" :products="products" />
  </div>

  <AddressModalComponent />
</template>

<style scoped></style>
