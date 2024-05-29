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
    class="max-w-xl mx-auto font-bold text-sm text-zinc-500 text-center px-3 border"
  >
    <p
      class="testimonial max-w-md text-center mx-auto text-xs md:text-md relative"
    >
      {{ testimonialObj.text }}
      <span class="block text-primary text-xs uppercase font-normal mt-3">
        {{ testimonialObj.person }}
      </span>
      <font-awesome-icon
        icon="fa-solid fa-quote-left"
        class="absolute -top-[50px] left-0 md:-left-10 text-3xl text-[#b7903c]"
      />
      <font-awesome-icon
        icon="fa-solid fa-quote-right"
        class="absolute -bottom-[50px] right-0 md:-right-10 text-3xl text-[#b7903c]"
      />
    </p>
  </div>
</template>

<style scoped></style>
