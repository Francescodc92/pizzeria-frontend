<script setup>
import { reactive, ref } from "vue";
import { store } from "../../../store.js";
import ModalReservationComponent from "./ModalReservationComponent.vue";

const reservation = reactive({
  numberOfPerson: 0,
  dateReservation: "",
  hourReservation: "",
});

const getReservationData = () => {
  store.modalReservationOpen = true;
};

const cancel = () => {
  store.modalReservationOpen = false;
  reservation.numberOfPerson = 0;
  reservation.dateReservation = "";
  reservation.hourReservation = "";
};

const reserve = () => {
  //aggiungere la chiamata axios per creare la prenotazione
  store.modalReservationOpen = false;
  reservation.numberOfPerson = 0;
  reservation.dateReservation = "";
  reservation.hourReservation = "";
};
</script>

<template>
  <section
    id="reservations"
    class="bg-reservations bg-no-repeat bg-cover bg-center py-16 mb-2"
  >
    <div class="form-wrapper h-full">
      <form
        @submit.prevent="getReservationData()"
        class="flex flex-col text-center max-w-[400px] mx-auto lg:max-w-none lg:flex-row lg:items-center h-full px-3 lg:px-0 lg:justify-center gap-3"
      >
        <div
          class="bg-white py-4 ps-2 border border-black relative flex items-center"
        >
          <label for="person-reservation" class="text-md text-primary">
            Persone
          </label>
          <input
            class="outline-0 px-1 w-[150px]"
            type="number"
            id="person-reservation"
            placeholder="1"
            v-model="reservation.numberOfPerson"
            required
          />
          <font-awesome-icon
            icon="fa-solid fa-user-group"
            class="absolute right-2 top-1/2 -translate-y-1/2 text-[#b7903c] w-5 h-5"
          />
        </div>
        <p class="uppercase text-white font-bold">Il</p>
        <div
          class="bg-white py-4 ps-2 border border-black relative flex items-center"
        >
          <label for="date-reservation" class="text-md text-primary"
            >Giorno</label
          >
          <input
            class="outline-0 px-1 w-[150px]"
            type="date"
            id="date-reservation"
            v-model="reservation.dateReservation"
            required
          />
          <font-awesome-icon
            icon="fa-regular fa-calendar"
            class="absolute right-2 top-1/2 -translate-y-1/2 text-[#b7903c] w-5 h-5"
          />
        </div>
        <p class="uppercase text-white font-bold">Alle</p>
        <div
          class="bg-white py-4 ps-2 border border-black relative flex items-center"
        >
          <label for="hour-reservation" class="text-md text-primary">Ora</label>
          <input
            class="outline-0 px-1 w-[150px] font-sm"
            type="time"
            id="hour-reservation"
            placeholder="7:00 pm"
            v-model="reservation.hourReservation"
            required
          />
          <font-awesome-icon
            icon="fa-regular fa-clock"
            class="absolute right-2 top-1/2 -translate-y-1/2 text-[#b7903c] w-5 h-5"
          />
        </div>
        <button
          class="py-5 px-10 text-md font-bold uppercase text-white bg-primary cursor-pointer hover:bg-primary/90"
        >
          Prenota Un Tavolo
        </button>
      </form>
    </div>
    <!--form wrapper-->
    <ModalReservationComponent
      v-if="store.modalReservationOpen"
      :reservationsDetails="reservation"
      @confirmReservation="reserve()"
      @cancelReservation="cancel()"
    />
    <!--modal wrapper-->
  </section>
</template>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}

input[type="time"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
