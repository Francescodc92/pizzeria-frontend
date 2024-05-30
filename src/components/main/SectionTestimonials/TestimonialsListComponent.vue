<script setup>
import { ref } from "vue";
import TestimonialSliderComponent from "./TestimonialSliderComponent.vue";
import SliderButtons from "../../SliderButtons.vue";
import { sliderFunction } from "../../../utilities/sliderFunction";

const activeTestimonial = ref(0);
const testimonialsArray = ref([
  {
    text: "forgot the trendy pizza shops, this hidden spot makes the best new york-style pizza slice in naples",
    person: "washington post 2018",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum itaque facere dolor ducimus nobis, cum ratione molestias distinctio blanditiis recusandae nulla fugit, ipsum doloremque explicabo, enim sit esse eaque suscipit ex optio? Aperiam excepturi quasi non quis itaque reiciendis eaque, sequi, consequuntur, recusandae sit ut. Adipisci recusandae tempore debitis?",
    person: "lorem 2019",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus doloribus, vero id natus numquam aperiam, inventore amet odit unde optio! Magnam iste incidunt autem omnis animi debitis harum aut!",
    person: "lorem 2022",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus doloribus, vero id natus numquam aperiam, inventore amet odit unde optio! Magnam iste incidunt autem omnis animi debitis harum aut!",
    person: "lorem 2023",
  },
]);

const changeCurrentTestimonial = (button) => {
  activeTestimonial.value = sliderFunction(
    button,
    activeTestimonial.value,
    testimonialsArray.value
  );
};
</script>

<template>
  <section
    id="testimonials"
    class="bg-testimonials relative min-h-[400px] flex items-center justify-center bg-center bg-cover bg-no-repeat overflow-x-hidden"
  >
    <template v-for="(testimonial, index) in testimonialsArray">
      <TestimonialSliderComponent
        v-if="index === activeTestimonial"
        :key="index"
        :testimonialObj="testimonial"
      />
    </template>
    <SliderButtons @changeCurrent="changeCurrentTestimonial" />
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
      <p class="text-zinc-500">
        <span class="text-primary">{{ activeTestimonial + 1 }}</span>
        /
        <span>{{ testimonialsArray.length }}</span>
      </p>
    </div>
  </section>
</template>

<style scoped></style>
