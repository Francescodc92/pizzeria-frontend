<script setup>
import { ref } from "vue";
import PartnerComponent from "./PartnerComponent.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const partnersArray = ref([
  {
    link: "img/h1-clients-img-1.png",
    name: "client 1",
  },
  {
    link: "img/h1-clients-img-2.png",
    name: "client 2",
  },
  {
    link: "img/h1-clients-img-3.png",
    name: "client 3",
  },
  {
    link: "img/h1-clients-img-4.png",
    name: "client 4",
  },
  {
    link: "img/h1-clients-img-5.png",
    name: "client 5",
  },
]);
</script>

<template>
  <section id="partners" class="flex my-2">
    <swiper
      :slidesPerView="'auto'"
      :space-between="5"
      :autoplay="{
        delay: 2300,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        '400': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }"
      :modules="[Autoplay]"
    >
      <swiper-slide v-for="(partner, index) in partnersArray" :key="index">
        <PartnerComponent :partnerObj="partner" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped></style>
