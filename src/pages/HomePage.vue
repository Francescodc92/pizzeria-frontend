<script setup>
import { onMounted } from "vue";
import MainComponent from "../components/main/MainComponent.vue";
import { apiRequest } from "../utilities/axios/axiosInstance.js";
import { store } from "../store.js";

const getPizzas = () => {
  apiRequest.get("/api/pizzas-with-discount").then((response) => {
    store.pizzas = response.data.data;
  });
};

onMounted(() => getPizzas());
</script>

<template>
  <MainComponent />
</template>

<style scoped></style>
