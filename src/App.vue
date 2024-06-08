<script setup>
import Header from "./components/header/HeaderComponent.vue";
import Footer from "./components/footer/FooterComponent.vue";
import CartModalComponent from "./components/cart/CartModalComponent.vue";
</script>

<template>
  <div class="relative">
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
    <CartModalComponent />
  </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
