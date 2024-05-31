<script setup>
import Header from "./components/header/HeaderComponent.vue";
import Footer from "./components/footer/FooterComponent.vue";
</script>

<template>
  <div class="relative">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped></style>
