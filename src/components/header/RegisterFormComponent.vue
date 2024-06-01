<script setup>
import { store } from "../../store.js";
import { reactive } from "vue";
import { register } from "../../utilities/auth/authFunctions.js";
import { toast } from "../../utilities/toast/toastInstance.js";
const emit = defineEmits(["closeRegisterModal", "openLoginModal"]);
const formData = reactive({
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const submitForm = async () => {
  if (
    formData.firstName == "" ||
    formData.lastName == "" ||
    formData.phoneNumber == "" ||
    formData.email == "" ||
    formData.password == "" ||
    formData.password_confirmation == ""
  ) {
    toast.error("compila tutti i campi", {
      position: "top-right",
    });
    return;
  }

  if (formData.password != formData.password_confirmation) {
    toast.error(
      "la password non corrisponde al valore inserito nel campo conferma password",
      {
        position: "top-right",
      }
    );
    return;
  }

  const message = await register({
    first_name: formData.firstName,
    last_name: formData.lastName,
    phone_number: formData.phoneNumber,
    email: formData.email,
    password: formData.password,
    password_confirmation: formData.password_confirmation,
  });

  if (message) {
    emit("openLoginModal");
    toast.success(message, {
      position: "top-right",
    });
  }
};
</script>

<template>
  <div
    class="w-full h-screen fixed inset-0 bg-black/70 z-30 flex items-center justify-center px-2"
    v-if="store.registerModalOpen"
  >
    <button
      class="bg-primary text-white px-3 py-1 rounded absolute top-3 right-3 lg:top-8 lg:right-8 uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
      @click="$emit('closeRegisterModal')"
    >
      X
    </button>
    <form
      class="w-full max-w-[700px] bg-white py-5 px-4 md:px-10 rounded shadow-lg"
      @submit.prevent="submitForm()"
    >
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col mb-2 lg:mb-4 w-full">
          <label class="text-sm text-gray-500 mb-2" for="firstName">
            Nome
          </label>
          <input
            class="px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
            id="firstName"
            name="firstName"
            v-model="formData.firstName"
            type="text"
            placeholder="nome"
          />
        </div>
        <!--end firstName-->
        <div class="flex flex-col mb-2 lg:mb-4 w-full">
          <label class="text-sm text-gray-500 mb-2" for="lastName">
            Cognome
          </label>
          <input
            class="px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
            id="lastName"
            name="lastName"
            v-model="formData.lastName"
            type="text"
            placeholder="cognome"
          />
        </div>
        <!--end lastName-->
      </div>
      <div class="flex flex-col mb-2 lg:mb-4">
        <label class="text-sm text-gray-500 mb-2" for="phoneNumber">
          Numero di telefono
        </label>
        <input
          class="px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          id="phoneNumber"
          name="phoneNumber"
          v-model="formData.phoneNumber"
          type="text"
          placeholder=" numero di telefono"
        />
      </div>
      <!--end phoneNumber-->
      <div class="flex flex-col mb-2 lg:mb-4">
        <label class="text-sm text-gray-500 mb-2" for="email"> Email </label>
        <input
          class="px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          id="email"
          name="email"
          v-model="formData.email"
          type="email"
          placeholder="Email"
        />
      </div>
      <!--end email-->
      <div class="flex flex-col md:flex-row mb-2 lg:mb-4">
        <div class="flex flex-col w-full">
          <label class="text-sm text-gray-500 mb-2" for="password">
            Password
          </label>
          <input
            class="px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
            id="password"
            v-model="formData.password"
            type="password"
            placeholder="password"
          />
        </div>
        <!--end password-->
        <div class="flex flex-col w-full">
          <label class="text-sm text-gray-500 mb-2" for="password_confirmation">
            Conferma Password
          </label>
          <input
            class="px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
            id="password_confirmation"
            v-model="formData.password_confirmation"
            type="password"
            placeholder="Conferma la password"
          />
        </div>
        <!--end password_confirmation-->
      </div>
      <div class="flex flex-col md:flex-row gap-3 items-center justify-between">
        <button
          class="bg-primary text-white px-4 py-2 rounded text-sm uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
          type="submit"
        >
          Registrati
        </button>
        <button
          @click="$emit('openLoginModal')"
          type="button"
          class="text-primary hover:underline"
        >
          hai già un account?
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
