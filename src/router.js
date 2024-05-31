import { createWebHistory, createRouter } from "vue-router";
import { apiRequest } from "./utilities/axiosInstance.js";
import { store } from "./store.js";
import HomePage from "./pages/HomePage.vue";
import NotFound from "./pages/NotFound.vue";
import PizzasPage from "./pages/PizzasPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/pizzas",
      name: "pizzas",
      component: PizzasPage,
      //aggiungere la chiamata axios per prendere le l'utente loggato dal back
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});
