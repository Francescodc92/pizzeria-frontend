<script setup>
import { getImgPath } from "../../utilities/getPath.js";
import { sliderFunction } from "../../utilities/sliderFunction.js";
import SliderButtons from "../SliderButtons.vue";
import { ref } from "vue";
let activeImg = ref(0);
const sliderHeaderArray = ref([
  {
    name: "taste",
    src: "img/h3-rev-img-4.png",
    bg: "bg-taste",
  },
  {
    name: "urban",
    src: "img/h3-rev-img-6.png",
    bg: "bg-urban",
  },
  {
    name: "crust",
    src: "img/h3-rev-img-2.png",
    bg: "bg-crust",
  },
]);

const changeCurrentImg = (button) => {
  activeImg.value = sliderFunction(
    button,
    activeImg.value,
    sliderHeaderArray.value
  );
};
</script>

<template>
  <div v-for="(slide, index) in sliderHeaderArray" :key="index" class="pb-3">
    <div
      class="flex items-center justify-center h-[250px] md:h-[320px] bg-center bg-contain bg-no-repeat"
      :class="slide.bg"
      v-if="index == activeImg"
    >
      <img
        class="object-cover max-h-full"
        :src="getImgPath(slide.src)"
        :alt="slide.name"
      />
    </div>
  </div>

  <SliderButtons @changeCurrent="changeCurrentImg" />
</template>

<style scoped></style>
