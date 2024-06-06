<script setup>
import { store } from "../../store.js";
import { apiRequest } from "../../utilities/axios/axiosInstance.js";
import { toast } from "../../utilities/toast/toastInstance.js";
import { setDataInLocalStorage } from "../../utilities/localStorage/localStorageHelper.js";
import { reactive } from "vue";
const formData = reactive({
  city: "",
  country: "Italia",
  road: "",
  zipCode: "",
});

const submitForm = () => {
  if (formData.city == "" || formData.country == "" || formData.road == "" || formData.zipCode == "") {
    toast.error("compila tutti i campi", {
      position: "top-right",
    });
    return;
  }

  apiRequest.post("/api/user/address", formData)
    .then((response) => {
      store.user = response.data.data;
      setDataInLocalStorage("user", store.user);

      store.addressModalOpen = false;
      toast.success("indirizzo aggiunto", {
        position: "top-right",
      });
    })


};
</script>

<template>
  <div class="w-full h-screen fixed inset-0 bg-black/70 z-30 flex items-center justify-center px-2"
    v-if="store.addressModalOpen">
    <button
      class="bg-primary text-white px-3 py-1 rounded absolute top-8 right-8 uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
      @click="store.addressModalOpen = false">
      X
    </button>
    <form class="w-full max-w-[600px] bg-white py-10 px-4 md:px-10 rounded shadow-lg" @submit.prevent="submitForm()">
      <div class="flex flex-col mb-4">
        <label class="text-sm text-gray-500 mb-2" for="city"> Città </label>
        <input class="px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none" id="city"
          name="city" v-model="formData.city" type="city" placeholder="Campobasso, roma, milano ..." required />
      </div>

      <div class="flex flex-col mb-4">
        <label class="text-sm text-gray-500 mb-2" for="road">Indirizzo</label>
        <input class="px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none" id="road"
          name="road" v-model="formData.road" type="road" placeholder="Via Roma 13 , Via Napoli... " required />
      </div>

      <div class="flex flex-col mb-4">
        <label class="text-sm text-gray-500 mb-2" for="zipCode">Codice Postale</label>
        <input class="px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none" id="zipCode"
          name="zipCode" v-model="formData.zipCode" type="zipCode" placeholder="00100, 86100 ..." required />
      </div>

      <div class="flex flex-col md:flex-row gap-3 items-center justify-between">
        <button
          class="bg-primary text-white px-4 py-2 rounded text-sm uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
          type="submit">
          Aggiungi Indirizzo
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
