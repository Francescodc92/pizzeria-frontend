<script setup>
  const {elementImgPath} = defineProps(['elementImgPath'])
</script>

<template>
    
    <div class="group relative h-full"> 
      <img :src="elementImgPath" alt="">
      <div class="hidden absolute inset-0 group-hover:flex justify-center transition-all duration-300 items-center bg-slate-300">
        <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
          <font-awesome-icon icon="fa-regular fa-eye" />
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

</style>