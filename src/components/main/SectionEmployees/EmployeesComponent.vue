<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import EmployeeComponent from "./EmployeeComponent.vue";

const employeesArray = ref([
  {
    link: "img/h1-team-1a-700x700.jpg",
    name: "giovanni rossi",
    role: "cameriere",
  },
  {
    link: "img/h1-team-2a.jpg",
    name: "valeria verdi",
    role: "barista",
  },
  {
    link: "img/h1-team-3a.jpg",
    name: "michela rossi",
    role: "menager",
  },
  {
    link: "img/h1-team-4a.jpg",
    name: "giacomo rossi",
    role: "cuoco",
  },
]);
</script>

<template>
  <section id="employees" class="flex my-2">
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
      <swiper-slide v-for="(employee, index) in employeesArray" :key="index">
        <EmployeeComponent :employeeData="employee" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped></style>
