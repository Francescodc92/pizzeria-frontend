<script setup>
const { reservationsDetails } = defineProps({
  reservationsDetails: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["cancelReservation", "confirmReservation"]);
</script>

<template>
  <div
    class="w-full h-full bg-cielo bg-center bg-no-repeat bg-cover fixed z-30 inset-0 flex items-center justify-center"
  >
    <div
      class="w-[90%] max-w-[500px] h-[70%] max-h-[600px] bg-white rounded-xl flex flex-col py-4"
    >
      <div class="flex-1">
        <h2 class="text-center px-5 text-[#b7903c] uppercase">Ricevuta</h2>
        <p class="uppercase text-sm text-primary text-center mb-5">
          hai riservato un tavolo per..
        </p>
        <ul class="ps-5">
          <li class="text-xl capitalize mb-3">
            -
            <span class="text-primary font-bold">{{
              reservationsDetails.numberOfPerson
            }}</span>
            persone
          </li>
          <li class="text-xl capitalize mb-3">
            - il giorno
            <span class="text-primary font-bold">
              {{ reservationsDetails.dateReservation }}
            </span>
          </li>
          <li class="text-xl capitalize mb-3">
            - alle ore
            <span class="text-primary font-bold">{{
              reservationsDetails.hourReservation
            }}</span>
          </li>
        </ul>
      </div>
      <div
        class="mt-10 flex flex-col md:flex-row md:items-center justify-center gap-5 px-3"
      >
        <button
          class="transition-all duration-300 px-4 py-2 uppercase cursor-pointer font-bold border border-green-600 hover:bg-green-600 hover:text-white"
          @click="$emit('confirmReservation')"
        >
          Conferma
        </button>
        <button
          class="transition-all duration-300 px-4 py-2 uppercase cursor-pointer font-bold border border-red-600 hover:bg-red-600 hover:text-white"
          @click="$emit('cancelReservation')"
        >
          Annulla
        </button>
      </div>
    </div>
  </div>
  <!--modal wrapper-->
</template>

<style scoped></style>
