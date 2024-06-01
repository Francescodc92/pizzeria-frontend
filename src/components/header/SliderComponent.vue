<script setup>
import { getImgPath } from "../../utilities/imagePath/getPath.js";
import { sliderFunction } from "../../utilities/slider/sliderFunction.js";
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

const changeCurrentImgIndex = (index) => {
  activeImg.value = index;
};
</script>

<template>
  <div v-for="(slide, index) in sliderHeaderArray" :key="index">
    <div
      class="flex items-center justify-center h-[250px] md:h-[320px] bg-center bg-contain bg-no-repeat mb-12"
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
  <div class="flex absolute bottom-5 left-1/2 -translate-x-1/2">
    <div
      class="w-5 h-5 rounded-full mx-1 cursor-pointer"
      v-for="(slide, index) in sliderHeaderArray"
      :key="index"
      :class="index == activeImg ? 'bg-primary' : 'bg-slate-700'"
      @click="changeCurrentImgIndex(index)"
    ></div>
  </div>

  <SliderButtons @changeCurrent="changeCurrentImg" />
</template>

<style scoped></style>
