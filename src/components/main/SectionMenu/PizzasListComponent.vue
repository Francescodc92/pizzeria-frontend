<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { store } from "../../../store";
import PizzaComponent from "./PizzaComponent.vue";
</script>

<template>
  <section id="menu" class="my-2">
    <div class="max-w-xl mx-auto text-center py-5">
      <p class="text-primary uppercase text-md">Choose your favorite</p>
      <h2 class="uppercase text-xl my-2 font-semibold">
        the bast pizza menu in town
      </h2>
      <span class="text-zinc-500 text-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        fugit unde corrupti nihil quis est beatae, et rem expedita veniam!
      </span>
    </div>

    <div class="flex">
      <swiper :slidesPerView="'auto'" :space-between="5" :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }" :breakpoints="{
        '400': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }" :modules="[Autoplay]">
        <swiper-slide v-for="(pizza, index) in store.pizzas" :key="index">
          <PizzaComponent :pizzaObj="pizza" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="text-center mt-7">
      <router-link :to="{ name: 'pizzas' }"
        class="bg-primary text-white rounded px-4 py-3 uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70">
        Pagina Prodotti
      </router-link>
    </div>
  </section>
</template>

<style scoped></style>
