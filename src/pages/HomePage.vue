<script setup>
import { onMounted } from "vue";
import MainComponent from "../components/main/MainComponent.vue";
import { apiRequest } from "../utilities/axiosInstance.js";
import { store } from "../store.js";

const getPizzas = () => {
  apiRequest.get("/pizzas").then((response) => {
    store.pizzas = response.data.data;
  });
};

onMounted(() => getPizzas());
</script>

<template>
  <MainComponent />
</template>

<style scoped></style>
