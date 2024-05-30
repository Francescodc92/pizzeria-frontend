<script setup>
const { testimonialObj } = defineProps({
  testimonialObj: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="max-w-xl mx-auto font-bold text-zinc-500 text-center text-sm lg:text-lg px-3"
  >
    <p class="testimonial max-w-xl text-center mx-auto relative">
      {{ testimonialObj.text }}
      <span class="block text-primary uppercase font-normal mt-3">
        {{ testimonialObj.person }}
      </span>
      <font-awesome-icon
        icon="fa-solid fa-quote-left"
        class="absolute -top-[30px] left-0 md:-left-10 text-3xl text-[#b7903c]"
      />
      <font-awesome-icon
        icon="fa-solid fa-quote-right"
        class="absolute bottom-0 md:bottom-4 right-0 md:-right-10 text-3xl text-[#b7903c]"
      />
    </p>
  </div>
</template>

<style scoped></style>
