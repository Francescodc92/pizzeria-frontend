<script setup>
import { ref } from "vue";
import { getImgPath } from "../../../utilities/getPath.js";
import CardComponent from "./CardComponent.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const cardsArray = ref([
  "img/h3-img-1.jpg",
  "img/h3-img-2.jpg",
  "img/h3-img-3.jpg",
  "img/h3-img-4.jpg",
]);
</script>

<template>
  <section id="banner" class="my-1">
    <swiper
      :slidesPerView="'auto'"
      :space-between="5"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: true,
      }"
      :breakpoints="{
        '640': {
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
      }"
      :modules="[Autoplay]"
    >
      <swiper-slide v-for="(card, index) in cardsArray" :key="index">
        <CardComponent :elementImgPath="getImgPath(card)" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped></style>
