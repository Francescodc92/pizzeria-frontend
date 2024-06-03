import { createWebHistory, createRouter } from "vue-router";
import { apiRequest } from "./utilities/axios/axiosInstance.js";
import { setDataInLocalStorage } from "./utilities/localStorage/localStorageHelper.js";
import { store } from "./store.js";
import HomePage from "./pages/HomePage.vue";
import NotFound from "./pages/NotFound.vue";
import PizzasPage from "./pages/PizzasPage.vue";
import SinglePizza from "./pages/SinglePizza.vue";

const router = createRouter({
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
    },
    {
      path: "/pizzas/:id",
      name: "single-pizza",
      component: SinglePizza,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach(async to => {
    apiRequest.get("/api/user")
    .then((response) => {})
    .catch((error) => {
      store.user = null;
      setDataInLocalStorage("user", null);
    })
  ;
})

export {router}