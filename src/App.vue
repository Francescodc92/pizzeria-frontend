<script setup>
import Header from "./components/header/HeaderComponent.vue";
import Footer from "./components/footer/FooterComponent.vue";
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
