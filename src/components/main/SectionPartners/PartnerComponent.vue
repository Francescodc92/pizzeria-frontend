<script setup>
import { getImgPath } from "../../../utilities/getPath.js";
const { partnerObj } = defineProps({
  partnerObj: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="py-10">
    <img
      class="w-full h-full object-contain"
      :src="getImgPath(partnerObj.link)"
      :alt="partnerObj.name"
    />
  </div>
</template>

<style scoped></style>
