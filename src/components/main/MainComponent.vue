<script setup>
import BannerListComponent from "./SectionBanner/BannerListComponent.vue";
import SpecialsComboComponent from "./SectionPromotion/SpecialsComboComponent.vue";
import TestimonialsListComponent from "./SectionTestimonials/TestimonialsListComponent.vue";
import ImageComponent from "./SectionImg/ImgComponent.vue";
import EmployeesListComponent from "./SectionEmployees/EmployeesListComponent.vue";
import PartnersListComponent from "./SectionPartners/PartnersListComponent.vue";
import PizzasListComponent from "./SectionMenu/PizzasListComponent.vue";
import EventsListComponent from "./SectionEvents/EventsListComponent.vue";
import ReservationsComponent from "./SectionReservations/ReservationsComponent.vue";
</script>

<template>
  <main class="bg-[#f6f7f2]">
    <BannerListComponent />
    <TestimonialsListComponent />
    <SpecialsComboComponent />
    <ImageComponent />
    <EmployeesListComponent />
    <PartnersListComponent />
    <PizzasListComponent />
    <EventsListComponent />
    <ReservationsComponent />
  </main>
</template>

<style scoped></style>
