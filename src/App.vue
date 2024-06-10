<script setup>
import { onMounted, ref } from "vue";
import Header from "./components/header/HeaderComponent.vue";
import Footer from "./components/footer/FooterComponent.vue";
import CartModalComponent from "./components/cart/CartModalComponent.vue";
import ButtonGoUp from "./components/ButtonGoUp.vue";

let shouldShowButton = ref(false)

const checkScroll = () => {
  if (window.scrollY > 500) {
    shouldShowButton.value = true;
  } else {
    shouldShowButton.value = false;
  }
}



window.addEventListener("scroll", checkScroll);
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
    <ButtonGoUp v-if="shouldShowButton" />
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
