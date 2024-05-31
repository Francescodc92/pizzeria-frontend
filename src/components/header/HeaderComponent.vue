<script setup>
import NavBarComponent from "./NavBarComponent.vue";
import SliderComponent from "./SliderComponent.vue";
import LoginModalComponent from "./LoginModalComponent.vue";
import RegisterFormComponent from "./RegisterFormComponent.vue";
import { store } from "../../store.js";

const toggleLoginModal = () => {
  store.registerModalOpen && toggleRegisterModal();
  store.loginModalOpen = !store.loginModalOpen;
};
const toggleRegisterModal = () => {
  store.loginModalOpen && toggleLoginModal();
  store.registerModalOpen = !store.registerModalOpen;
};
</script>

<template>
  <header class="bg-cielo bg-center bg-cover bg-no-repeat">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <NavBarComponent @openLoginModal="toggleLoginModal()" />
    </div>
    <div class="mt-10 relative overflow-x-hidden py-3">
      <SliderComponent />
    </div>
    <!--end container-->
  </header>
  <!--and header-->
  <LoginModalComponent
    @closeLoginModal="toggleLoginModal()"
    @openRegisterModal="toggleRegisterModal()"
  />
  <!--login modal-->
  <RegisterFormComponent
    @closeRegisterModal="toggleRegisterModal()"
    @openLoginModal="toggleLoginModal()"
  />
</template>

<style scoped></style>
