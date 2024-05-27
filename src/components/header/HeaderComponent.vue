<script setup>
  import NavBarComponent from '../header/NavBarComponent.vue'
  import SliderComponent from '../header/SliderComponent.vue'
</script>

<template>
  <header class="bg-cielo bg-center bg-cover bg-no-repeat">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <NavBarComponent/>
    </div>
    <div class="mt-10 relative overflow-x-hidden py-3">
      <SliderComponent/>
    </div>
    <!--end container-->
  </header>
  <!--and header-->
</template>

<style scoped>
</style>
