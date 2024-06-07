import { createWebHistory, createRouter } from "vue-router";
import { apiRequest } from "./utilities/axios/axiosInstance.js";
import { setDataInLocalStorage } from "./utilities/localStorage/localStorageHelper.js";
import { store } from "./store.js";
import { toast } from "./utilities/toast/toastInstance.js";

import HomePage from "./pages/home/HomePage.vue";
import NotFound from "./pages/NotFound.vue";
import PizzasPage from "./pages/pizzasList/PizzasPage.vue";
import SinglePizza from "./pages/showPizzaInfo/SinglePizza.vue";
import CheckoutPage from "./pages/checkout/CheckoutPage.vue";
import OrdersPage from "./pages/ordersList/OrdersPage.vue";

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
      path: "/checkout",
      name: "checkout",
      component: CheckoutPage,
      beforeEnter: (to, from) => {
        if (!store.user) {
          toast.error("devi prima effettuare il login", {
            position: "top-right",
          });
          return { name: "home" };
        }
      },
    },
    {
      path: "/orders",
      name: "orders",
      component: OrdersPage,
      beforeEnter: (to, from) => {
        if (!store.user) {
          toast.error("devi prima effettuare il login", {
            position: "top-right",
          });
          return { name: "home" };
        }
      },
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

router.beforeEach(async (to) => {
  apiRequest
    .get("/api/user")
    .then((response) => {})
    .catch((error) => {
      store.user = null;
      setDataInLocalStorage("user", null);
    });
});

export { router };
