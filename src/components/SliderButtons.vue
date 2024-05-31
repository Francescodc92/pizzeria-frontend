<script setup>
const emit = defineEmits(["changeCurrent"]);
</script>

<template>
  <button
    class="w-16 h-16 absolute rounded-full bg-white transition-all duration-300 hover:bg-primary hover:text-white uppercase text-xs pb-2 text-primary font-bold bottom-3 sm:bottom-1/2 -translate-y-1/2 sm:translate-y-1/2 -translate-x-1/2 -rotate-90 flex items-end justify-center left-0 border border-primary"
    @click="$emit('changeCurrent', 'prev')"
  >
    prev
  </button>
  <button
    class="w-16 h-16 absolute rounded-full bg-white transition-all duration-300 hover:bg-primary hover:text-white uppercase text-xs pb-2 text-primary font-bold bottom-3 sm:bottom-1/2 -translate-y-1/2 sm:translate-y-1/2 translate-x-1/2 rotate-90 flex items-end justify-center right-0 border border-primary"
    @click="$emit('changeCurrent', 'next')"
  >
    next
  </button>
</template>

<style scoped></style>
