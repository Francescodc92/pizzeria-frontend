<script setup>
import { ref } from "vue";
import { getImgPath } from "../../../utilities/getPath.js";
import ComboComponent from "../SectionPromotion/ComboComponent.vue";

const combosArray = ref([
  {
    price: "$10",
    name: "combo piccolo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio ratione dolore, sit distinctio quisquam perspiciatis alias nostrum corrupti exercitationem.",
  },
  {
    price: "$20",
    name: "combo medio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio ratione dolore, sit distinctio quisquam perspiciatis alias nostrum corrupti exercitationem.",
  },
  {
    price: "$30",
    name: "combo grande",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio ratione dolore, sit distinctio quisquam perspiciatis alias nostrum corrupti exercitationem.",
  },
]);
</script>

<template>
  <section
    id="specials-combos"
    class="min-h-[350px] max-h-[500px] md:min-h-[400px] flex flex-col lg:flex-row my-2 overflow-hidden"
  >
    <div
      class="relative lg:w-2/3 before:content-[url('/src/assets/img/h1-img-7n.png')] before:bg-black/20 before:w-full before:max-w-full before:h-full before:absolute before:flex before:items-center before:justify-center"
    >
      <img
        class="h-full w-full object-cover object-top"
        :src="getImgPath('img/h1-img-4.jpg')"
        alt=""
      />
    </div>
    <div class="lg:w-1/3">
      <div class="pt-4 lg:pt-10 px-3 lg:ps-10">
        <h2 class="text-xl uppercase font-bold mb-2">Specials*</h2>
        <p class="text-zinc-400 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          eaque!
        </p>
      </div>
      <div class="px-3 lg:ps-10">
        <ComboComponent
          v-for="(combo, index) in combosArray"
          :key="index"
          :comboObj="combo"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
