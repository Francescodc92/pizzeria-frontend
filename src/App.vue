<script setup>
import Header from "./components/header/HeaderComponent.vue";
import Footer from "./components/footer/FooterComponent.vue";
import CartModalComponent from "./components/cart/CartModalComponent.vue";
</script>

<template>
  <div class="relative">
    <Header />
    <router-view></router-view>
    <Footer />
    <CartModalComponent />
  </div>
</template>

<style scoped></style>
