<script setup>
const emit = defineEmits(["changeQuantity"]);
const { quantity } = defineProps({
  quantity: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <button type="button" id="decrement-button" @click="$emit('changeQuantity', 'decrement')"
    class="bg-primary hover:bg-primary/80 text-white hover:text-white/50 flex items-center justify-center border rounded-md h-10 w-10 ">
    <font-awesome-icon icon="fa-solid fa-minus" />
  </button>
  {{ quantity }}
  <button type="button" id="increment-button" @click="$emit('changeQuantity', 'increment')"
    class="bg-primary hover:bg-primary/80 text-white hover:text-white/50  flex items-center justify-center border rounded-md h-10 w-10 ">
    <font-awesome-icon icon="fa-solid fa-plus" />
  </button>
</template>

<style scoped></style>
