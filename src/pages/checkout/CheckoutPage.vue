<script setup>
import { onMounted, ref } from "vue";
import { apiRequest } from "../../utilities/axios/axiosInstance.js";
import { getSanctumToken } from "../../utilities/auth/authFunctions.js";
import { store } from "../../store.js";
import PaymentComponent from "./PaymentComponent.vue";
const tokenBraintree = ref("");
const products = ref(store.cart);

onMounted(() => {
  apiRequest.get("/api/orders/generate-token")
    .then((response) => {
      tokenBraintree.value = response.data.token;
    })
});
</script>

<template>
  <PaymentComponent v-if="tokenBraintree" :authorization="tokenBraintree" :loadingPayment="true" :disabledButton="false"
    :products="products" />
</template>

<style scoped></style>
