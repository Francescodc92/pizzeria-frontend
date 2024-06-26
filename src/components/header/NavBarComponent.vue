<script setup>
import { ref } from "vue";
import { store } from "../../store.js";
import { toast } from "../../utilities/toast/toastInstance.js";
import { getImgPath } from "../../utilities/imagePath/getPath.js";
import { logout } from "../../utilities/auth/authFunctions.js";
import { RouterLink, useRouter } from "vue-router";

let showMenu = ref(false);
const router = useRouter();
let logoutModalOpen = ref(false);
const emit = defineEmits(["openLoginModal"]);

const logoutClick = async () => {
  const message = await logout();
  logoutModalOpen.value = false;
  router.push({ name: "home" });
  toast.success(message, {
    position: "top-right",
  });
};

const openCartModal = () => store.cartModalOpen = !store.cartModalOpen;
</script>

<template>
  <nav class="fixed w-full z-20 top-0 start-0 bg-zinc-800">
    <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto px-2 py-2">
      <router-link :to="{ name: 'pizzas' }"
        class="bg-primary text-white px-3 py-1 rounded text-sm uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70">
        Ordina
      </router-link>
      <div class="max-w-[80px] sm:max-w-[90px] hidden sm:block md:hidden">
        <img class="w-full" :src="getImgPath('img/h5-logo-divided-header-dark.png')" alt="logo pizzeria don peppe" />
      </div>
      <div class="flex items-center md:order-2 space-x-3 md:space-x-0">
        <button type="button"
          class="bg-primary text-white px-3 py-1 rounded text-sm uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
          @click="$emit('openLoginModal')" v-if="!store.user">
          Accedi
        </button>
        <ul v-else>
          <li class="text-primary uppercase hover:text-primary/70 p-2 underline cursor-pointer relative">
            <span @click="logoutModalOpen = !logoutModalOpen">
              {{ store.user.firstName }}
            </span>
            <div
              class="w-[180px] bg-black/60 px-5 py-3 rounded-lg z-50 absolute top-10 lg:-left-2 -left-[100px] transition-all duration-300"
              v-if="logoutModalOpen">
              <ul class="flex flex-col gap-3">
                <li>
                  <button
                    class="w-full bg-primary text-white px-3 py-2 uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
                    @click="logoutClick()">
                    Logout
                  </button>
                </li>
                <li v-if="store.user.role.includes('admin')" class="w-full">
                  <a class="bg-primary w-full block text-white px-3 py-2 text-center uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
                    href="http://localhost/admin/pizzas" target="_blank">Area Admin</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <button @click="showMenu = !showMenu" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <!--end buttons -->
      <div class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        :class="{ hidden: !showMenu, block: showMenu }">
        <ul
          class="flex flex-col gap-2 md:gap-0 py-4 px-1 md:p-0 mt-4 border rounded-lg bg-gray-50 rtl:space-x-reverse md:flex-row md:items-center md:mt-0 md:border-0 bg-gray-800/80 md:bg-transparent border-gray-700">
          <li>
            <router-link :to="{ name: 'home' }"
              class="flex items-center justify-center gap-1 py-2 px-3  rounded  md:bg-transparent uppercase hover:text-primary hover:fill-primary text-sm"
              :class="$route.name === 'home' ? 'fill-primary text-primary' : 'fill-white text-white'">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 11" class="qodef-moustache w-5 h-5">
                <path
                  d="M21.1 3.7c-.6-.1-1.1-.3-1.6-.7-.4-.3-.8-.7-1.1-1-.9-.9-1.8-1.8-3.1-1.8-.2 0-.4 0-.6.1-.8.1-1.6.6-2.2 1.3C11.9.9 11.2.4 10.3.3c-.2 0-.4-.1-.6-.1-1.3 0-2.2.9-3 1.8-.4.3-.8.7-1.2 1-.6.5-1.3.7-2.1.7-1 0-1.9-.4-2.6-1l-.6-.6v.8c0 6.8 4.4 7.8 7.1 7.8 1.5 0 2.8-.3 3.2-.5.8-.4 1.4-.9 2-1.5.5.7 1.2 1.2 2 1.5.4.2 1.7.5 3.2.5 1 0 2.3-.1 3.5-.7.2-.1.5-.3.7-.4 1.7-1 3-3 3-6.8v-.7l-.6.5c-.6.6-1.5 1-2.4 1l-.8.1zm0 5.6c-1.1.6-2.3.8-3.5.8-1.5 0-2.7-.3-3-.5-.8-.4-1.5-1-2-1.7l-.3-.4-.3.4c-.5.7-1.1 1.3-2 1.7 0 .1-1.2.4-2.7.4C4.5 10 1.2 8.9.9 3.6c.7.5 1.6.7 2.5.7.9 0 1.8-.3 2.5-.8.4-.3.8-.7 1.2-1.1C7.9 1.7 8.7 1 9.8 1h.5c.8.1 1.5.6 2 1.4l.3.4.3-.4c.5-.8 1.2-1.3 2-1.4h.5c1.1 0 1.8.8 2.7 1.6.4.4.8.8 1.2 1.1.6.4 1.3.7 2 .8h.7c.8 0 1.6-.3 2.3-.7-.1 2.6-1 4.2-2.3 5.2-.4 0-.6.1-.9.3z" />
                <path
                  d="M17.7 11c-1.5 0-2.9-.3-3.3-.5-.7-.3-1.4-.8-1.9-1.4-.5.6-1.1 1.1-1.9 1.4-.4.2-1.7.5-3.3.5C4.6 11 0 10 0 2.9V1.6l.9.9c.6.6 1.5 1 2.4 1 .7 0 1.4-.2 2-.6.4-.3.7-.6 1.1-1 1-1 2-1.9 3.4-1.9.2 0 .4 0 .6.1.8.1 1.5.6 2.1 1.2.6-.7 1.3-1.1 2.1-1.2.2-.1.4-.1.6-.1 1.4 0 2.4 1 3.3 1.8.4.3.7.7 1.1 1 .4.3 1 .5 1.5.6h.7c.9 0 1.7-.4 2.3-1l.9-.8v1.3c0 4.2-1.7 6.1-3.1 7-.2.1-.5.3-.7.4-.9.5-2.1.7-3.5.7zm-5.2-2.7l.2.2c.5.6 1.1 1.1 1.9 1.5.4.2 1.7.5 3.1.5 1.4 0 2.5-.2 3.4-.7.2-.1.5-.3.7-.4 1.9-1.1 2.9-3.4 2.9-6.5v-.2l-.2.2c-.7.6-1.6 1-2.5 1.1h-.7c-.6-.1-1.2-.3-1.8-.7-.4-.3-.8-.7-1.2-1-.8-.8-1.7-1.7-3-1.7-.2 0-.4 0-.5.1-.8.1-1.5.6-2 1.3h-.3l-.2-.2c-.6-.7-1.3-1.1-2-1.3-.2 0-.4-.1-.5-.1-1.2 0-2.1.9-3 1.7-.4.4-.8.8-1.2 1.1-.6.5-1.4.7-2.2.7-1 0-2-.4-2.7-1.1l-.3-.1V3c0 6.6 4.3 7.6 6.9 7.6 1.5 0 2.8-.3 3.1-.5.8-.4 1.4-.9 1.9-1.5l.2-.3zm5.2 2c-1.6 0-2.8-.3-3-.5-.9-.4-1.6-1-2-1.8l-.1-.1-.2.1c-.5.8-1.2 1.4-2 1.8-.3.1-1.5.5-3 .5-2.9 0-6.3-1.1-6.6-6.6v-.5l.2.3c.7.5 1.5.7 2.3.7.9 0 1.7-.3 2.4-.8.5-.3.9-.7 1.3-1.1C7.9 1.5 8.7.7 9.8.7h.5c.8.2 1.6.7 2.1 1.5l.1.1.1-.1c.6-.8 1.3-1.4 2.1-1.5h.5c1.1 0 1.9.8 2.8 1.6l-.1.2.1-.2c.4.4.8.8 1.2 1.1.6.4 1.2.7 1.9.7h.7c.8 0 1.5-.3 2.2-.7l.4-.2v.5c-.1 2.4-.9 4.2-2.4 5.3-.2.2-.5.3-.7.5-1 .5-2.2.8-3.6.8zm-5.2-3.2l.5.7c.4.7 1 1.2 1.8 1.6.2.1 1.4.4 2.9.4 1.3 0 2.4-.3 3.4-.7.2-.1.4-.3.6-.4 1.2-.9 2-2.5 2.1-4.6-.6.3-1.3.5-2 .5h-.7c-.8-.1-1.5-.4-2.1-.8-.5-.3-.9-.7-1.2-1.1-.8-.8-1.5-1.5-2.5-1.5h-.4c-.7.1-1.4.6-1.9 1.3l-.4.7-.6-.6c-.5-.7-1.2-1.2-1.9-1.3h-.4c-1 0-1.7.7-2.5 1.5-.4.3-.8.7-1.2 1-.7.5-1.7.8-2.6.8-.8 0-1.5-.2-2.2-.6.4 4.7 3.6 5.7 6.2 5.7 1.5 0 2.6-.3 2.9-.4.7-.3 1.3-.8 1.7-1.5l.5-.7z" />
              </svg>
              Home
            </router-link>
          </li>
          <li>
            <a href="#menu"
              class="flex items-center justify-center hover:text-primary text-sm gap-1 py-2 px-3 text-white rounded md:bg-transparent uppercase">
              Promozioni
            </a>
          </li>
          <li>
            <router-link :to="{ name: 'pizzas' }"
              class="flex items-center justify-center hover:text-primary text-sm gap-1 py-2 px-3 rounded md:bg-transparent uppercase"
              :class="$route.name === 'pizzas' ? ' text-primary' : ' text-white'">
              Menu
            </router-link>
          </li>
          <li>
            <div class="max-w-[100px] hidden md:block">
              <img class="w-full" :src="getImgPath('img/h5-logo-divided-header.png')" alt="logo pizzeria don peppe" />
            </div>
          </li>
          <li>
            <a href="#events"
              class="flex items-center justify-center hover:text-primary text-sm gap-1 py-2 px-3 text-white rounded md:bg-transparent uppercase">
              eventi
            </a>
          </li>
          <li>
            <router-link :to="{ name: 'orders' }"
              class="flex items-center justify-center hover:text-primary text-sm gap-1 py-2 px-3 text-white rounded md:bg-transparent uppercase">
              Ordini
            </router-link>
          </li>
          <li class="flex items-center justify-center">
            <button @click="openCartModal"
              class="group flex items-center justify-center hover:text-primary text-sm gap-1 py-2 px-3 text-white rounded md:bg-transparent uppercase">
              <div class="relative flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20">
                  <path fill="currentColor"
                    d="M23 20c-2.2 0-4-1.8-4-4 0-.2 0-.4.1-.7.1-.3.3-.4.6-.4.3.1.4.3.4.6v.4c0 1.7 1.3 3 3 3s3-1.3 3-3c0-.7-.2-1.3-.6-1.8-.2-.2-.1-.5.1-.7.2-.2.5-.1.7.1.5.7.8 1.6.8 2.5-.1 2.2-1.9 4-4.1 4zM6 20c-1 0-1.9-.4-2.6-1-.7-.6-1.2-1.5-1.3-2.4-.1-.3.1-.6.4-.6.2 0 .5.2.5.4.2 1.5 1.5 2.6 3 2.6s2.8-1.1 3-2.6c0-.2.3-.4.5-.4.3 0 .5.3.4.6-.1.9-.6 1.8-1.3 2.4-.7.6-1.6 1-2.6 1z" />
                  <path fill="currentColor"
                    d="M18.5 17H.5c-.1 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4l.3-1.5c.2-1.2.7-2.3 1.4-3.3s1.5-1.9 2.5-2.5c.1-.1.2-.1.3-.1h9c.3 0 .5.2.5.5V14h3.7l.6-1.7c.5-1.3.7-2.6.7-3.9 0-1.2-.2-2.4-.6-3.5L18 3.7c-.1-.2 0-.3.1-.5.1-.1.2-.2.4-.2h4c.3 0 .5.2.5.5v2c0 .1-.1.3-.1.4l-.5.5.9.5c1.4.7 2.6 1.8 3.5 3.2.8 1.4 1.3 2.9 1.3 4.5 0 .3-.2.5-.5.5h-.1-.1-.1s-1.6-.8-3.8-.9h-.1c-2 0-4.5 2.8-4.5 2.8-.1-.1-.3 0-.4 0zM1.1 16h17.2c.3-.3.8-.8 1.5-1.4 1.3-1.1 2.5-1.6 3.6-1.6h.2c1.5.1 2.7.4 3.4.7-.3-2.6-1.8-4.8-4.2-6l-1.5-.8c-.2 0-.3-.2-.3-.3 0-.2 0-.3.1-.4l.9-.9V4h-2.8l.2.5c.4 1.3.6 2.6.6 3.9 0 1.5-.3 2.9-.8 4.3l-.8 2c0 .2-.2.3-.4.3h-4.5c-.3 0-.5-.2-.5-.5V10H4.7c-1.8 1.2-3 3-3.4 5.1l-.2.9z" />
                  <path fill="currentColor"
                    d="M12.5 10h-6C5.7 10 5 9.3 5 8.5S5.7 7 6.5 7h6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm-6-2c-.3 0-.5.2-.5.5s.2.5.5.5h6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-6zM17.5 3c-.8 0-1.5-.7-1.5-1.5S16.7 0 17.5 0 19 .7 19 1.5 18.3 3 17.5 3zm0-2c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5z" />
                  <path fill="currentColor"
                    d="M18.5 4c-.2 0-.4-.1-.4-.3l-.5-1.1c-.1-.2 0-.5.2-.7.2-.1.5 0 .7.2l.5 1.1c.1.2 0 .5-.2.7-.1.1-.2.1-.3.1zM23 18.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm0-4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM25 12.6c-.1 0-.3-.1-.4-.2-.5-.6-1.2-1-2-1.3-.6-.1-1.1-.1-1.1-.1-.3 0-.5-.2-.5-.5s.2-.5.5-.5c.1 0 2.3-.1 3.9 1.8.2.2.2.5-.1.7-.1 0-.2.1-.3.1zM11.5 15c-.3 0-.5-.2-.5-.5 0-1.4-1.1-2.5-2.5-2.5H6.7c-.7 0-1.3.3-1.8.7l-2.1 2.1c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7L4.3 12c.7-.7 1.5-1 2.5-1h1.8c1.9 0 3.5 1.6 3.5 3.5-.1.3-.3.5-.6.5zM6 18.5c-1.1 0-2.1-.8-2.4-1.9-.1-.3.1-.5.4-.6.3-.1.5.1.6.4.1.6.7 1.1 1.4 1.1s1.3-.5 1.4-1.1c.1-.3.3-.4.6-.4.3.1.4.3.4.6-.3 1.1-1.3 1.9-2.4 1.9z" />
                </svg>
                <div v-if="store.cart.length > 0"
                  class="group-hover:text-white absolute -top-[10px] -left-[10px] text-xs flex items-center justify-center w-5 h-5 bg-primary rounded-full">
                  {{ store.cart.length }}
                </div>
                cart
              </div>
            </button>
          </li>
        </ul>
      </div>
      <!--end responsive navigation-->
    </div>
  </nav>
  <!--end navigation-->
</template>

<style scoped></style>
