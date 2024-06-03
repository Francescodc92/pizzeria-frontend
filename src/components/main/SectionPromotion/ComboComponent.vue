<script setup>
const { comboObj } = defineProps({
  comboObj: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex gap-3 my-3">
    <div class="text-primary font-bold">
      {{ comboObj.price }}
    </div>
    <div>
      <h3 class="uppercase mb-3 font-[500]">{{ comboObj.name }}</h3>
      <p class="text-sm text-zinc-400">
        {{ comboObj.description }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
