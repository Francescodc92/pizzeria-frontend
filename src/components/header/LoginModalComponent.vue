<script setup>
import { store } from "../../store.js";
import { login } from "../../utilities/auth/authFunctions.js";
import { toast } from "../../utilities/toast/toastInstance.js";
import { reactive } from "vue";
const emit = defineEmits(["closeLoginModal", "openRegisterModal"]);
const formData = reactive({
  email: "",
  password: "",
});

const submitForm = async () => {
  if (formData.email == "" || formData.password == "") {
    toast.error("compila tutti i campi", {
      position: "top-right",
    });
    return;
  }

  const message = await login(formData);

  if (message) {
    emit("closeLoginModal");
    toast.success(message, {
      position: "top-right",
    });
  }
};
</script>

<template>
  <div
    class="w-full h-screen fixed inset-0 bg-black/70 z-30 flex items-center justify-center px-2"
    v-if="store.loginModalOpen"
  >
    <button
      class="bg-primary text-white px-3 py-1 rounded absolute top-8 right-8 uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
      @click="$emit('closeLoginModal')"
    >
      X
    </button>
    <form
      class="w-full max-w-[600px] bg-white py-10 px-4 md:px-10 rounded shadow-lg"
      @submit.prevent="submitForm()"
    >
      <div class="flex flex-col mb-4">
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
      <div class="flex flex-col mb-4">
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
      <div class="flex flex-col md:flex-row gap-3 items-center justify-between">
        <button
          class="bg-primary text-white px-4 py-2 rounded text-sm uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
          type="submit"
        >
          Accedi
        </button>
        <button
          @click="$emit('openRegisterModal')"
          type="button"
          class="text-primary hover:underline"
        >
          Non hai un account?
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
