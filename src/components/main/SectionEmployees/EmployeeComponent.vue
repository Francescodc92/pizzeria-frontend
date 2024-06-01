<script setup>
import { getImgPath } from "../../../utilities/imagePath/getPath.js";
const { employeeData } = defineProps({
  employeeData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="relative cursor-pointer group/container">
    <img :src="getImgPath(employeeData.link)" :alt="employeeData.name" />
    <div
      class="opacity-0 group-hover/container:opacity-100 absolute inset-0 transition-all duration-300 bg-zinc-200 flex items-center justify-center"
    >
      <div
        class="w-[90%] h-[90%] bg-primary text-white flex flex-col gap-3 items-center justify-center"
      >
        <h3 class="uppercase">
          {{ employeeData.name }}
        </h3>
        <span class="capitalize">
          {{ employeeData.role }}
        </span>
        <ul class="flex gap-2">
          <li class="p-2 group/item">
            <a
              href=""
              class="group-hover/item:text-white/30 transition-all duration-300"
            >
              <font-awesome-icon icon="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li class="p-2 group/item">
            <a
              href=""
              class="group-hover/item:text-white/30 transition-all duration-300"
            >
              <font-awesome-icon icon="fa-brands fa-twitter" />
            </a>
          </li>
          <li class="p-2 group/item">
            <a
              href=""
              class="group-hover/item:text-white/30 transition-all duration-300"
            >
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
