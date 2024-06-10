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
let loading = ref(false);


watch(() => store.cart, () => {
  products.value = store.cart
})

onMounted(() => {
  loading.value = true
  apiRequest.get("/api/orders/generate/token")
    .then((response) => {
      tokenBraintree.value = response.data.token;
      loading.value = false
    })
});
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
  <div class="max-w-6xl px-2 mx-auto" v-else>
    <div
      class=" flex flex-col border-t-2 border-b-2 border-primary rounded-2xl px-2 bg-white my-5 shadow-xl shadow-black/20 h-[250px]">

      <div class="px-5 py-5 border-b-[1px] border-primary font-semibold text-lg flex-1 overflow-y-auto ">
        <span class="block text-primary text-xs text-center">* Per modificare i prodotti accedi al
          carrello</span>
        <template v-if="store.cart.length > 0">
          <div v-for="product in products" :key="product.id" class="flex justify-between py-2 ">
            <p>
              <span class="text-primary">
                {{ product.quantity }}
              </span>
              {{ product.pizzaElement.name }}
            </p>
            <p class="text-primary">{{ formatCurrency(product.totalPrice) }}</p>
          </div>
        </template>

      </div>

      <div class="p-3 py-5 flex justify-between text-xl font-semibold">
        <span>Totale:</span>
        <p>{{ formatCurrency(getCartTotalPrice()) }}</p>
      </div>


    </div>

    <PaymentComponent v-if="tokenBraintree" :authorization="tokenBraintree" :loadingPayment="loading"
      :products="products" />
    <AddressModalComponent />
  </div>

</template>

<style scoped></style>
