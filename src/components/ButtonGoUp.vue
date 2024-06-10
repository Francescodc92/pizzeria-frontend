<script setup>
import { getImgPath } from '../utilities/imagePath/getPath';
const goUp = () => {
  document.documentElement.scrollTop = 0;
}
</script>

<template>
  <div
    class="w-12 h-12 fixed bottom-[80px] right-4 md:bottom-10 md:right-10 z-[100] bg-slate-200 rounded-full border border-primary ">
    <button @click="goUp()" class="w-full h-full flex items-center justify-center rounded-full cursor-pointer">
      <img :src="getImgPath('/svg/svg-4.svg')" alt="" />
    </button>
  </div>
</template>

<style scoped></style>
