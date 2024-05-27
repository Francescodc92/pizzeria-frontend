<script setup>
  import { getImgPath } from '../../utilities/getPath.js'
  import { ref } from 'vue'
  let activeImg = ref(0)
  const sliderHeaderArray = ref([
    {
      name:'taste',
      src: 'img/h3-rev-img-4.png',
      bg: 'bg-taste',
    },
    {
      name:'urban',
      src: 'img/h3-rev-img-6.png',
      bg: 'bg-urban',
    },
    {
      name:'crust',
      src: 'img/h3-rev-img-2.png',
      bg: 'bg-crust',
    }
  ])

  const changeCurrentImg = (button) =>{
      if(button == 'prev'){
        if(activeImg.value >  0){
          activeImg.value = activeImg.value -1 ;
        }else{
          activeImg.value = sliderHeaderArray.value.length - 1;
        };

      }else if(button == 'next'){
        if(activeImg.value < sliderHeaderArray.value.length - 1){
          activeImg.value = activeImg.value + 1;
        }else{
          activeImg.value = 0;
        };
      }
    }
</script>

<template>
  <div v-for="(slide, index) in sliderHeaderArray" :key="index">
    <div class="flex items-center justify-center h-[400px] bg-center bg-no-repeat" :class="slide.bg" v-if="index == activeImg" >
      <img class="object-cover max-h-full" :src="getImgPath(slide.src)" :alt="slide.name">
    </div>
  </div>

  <button class="w-16 h-16 absolute rounded-full bg-white pt-1 text-primary font-bold top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-90 flex items-start justify-center left-0 border border-primary" @click="changeCurrentImg('prev')">
    prev
  </button>
  <button class="w-16 h-16 absolute rounded-full bg-white pt-1 text-primary font-bold top-1/2 -translate-y-1/2 translate-x-1/2 -rotate-90 flex items-start justify-center right-0 border border-primary" @click="changeCurrentImg('next')">
    next
  </button>
</template>

<style scoped>
</style>
