<script setup>
import { formatCurrency } from "../../utilities/formatValue/formatCurrency";
import { onMounted, ref, watch } from "vue";
import { store } from "../../store.js";
import { apiRequest } from "../../utilities/axios/axiosInstance.js";
import { setDataInLocalStorage } from "../../utilities/localStorage/localStorageHelper.js";
import { useRouter } from "vue-router";
import { getPizzaQuantity, updatePizza, removeToCart, getPizzaTotalPrice, getPizzaCartIndex } from "../../utilities/cart/cart.js";
import QuantityButtons from "../QuantityButtons.vue";

const { pizzaId, pizzaQuantity } = defineProps({
  pizzaId: {
    type: Number,
    required: true,
  },
  pizzaQuantity: {
    type: Number,
    required: true,
  }
});

const pizza = ref({});
const router = useRouter();
const pizzaIndex = getPizzaCartIndex(pizzaId);
const totalPrice = ref(getPizzaTotalPrice(pizzaId));

const openPizzaInfo = (id) => {
  router.push({ name: 'single-pizza', params: { id } })
}

const setQuantity = (button) => {
  let quantity = getPizzaQuantity(pizzaId)
  if (button == "increment") {
    quantity = quantity + 1
  } else if (button == "decrement") {
    if (quantity > 1) {
      quantity = quantity - 1
    }
  }

  updatePizza(pizzaId, quantity)

  totalPrice.value = getPizzaTotalPrice(pizzaId)
}


watch(() => store.cart[pizzaIndex]?.quantity, () => {
  totalPrice.value = getPizzaTotalPrice(pizzaId)
}, { immediate: true })

const removePizza = () => {
  removeToCart(pizzaId)
}


onMounted(() => {
  apiRequest.get(`/api/pizzas/${pizzaId}`)
    .then((response) => {
      pizza.value = response.data.data;
      if (store.cart[pizzaIndex] && store.cart[pizzaIndex].pizzaElement.priceAfterDiscount != pizza.value.priceAfterDiscount) {
        console.log(pizza.value.name)
        removeToCart(pizzaId)
        return
      } else {
        totalPrice.value = getPizzaTotalPrice(pizzaId)
      }
    })
    .catch((error) => {
      removeToCart(pizzaId)
    })
})
</script>

<template>

  <div class="py-5 flex px-3 relative">
    <div class="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
      <div class="w-[150px] h-[150px] relative self-center">
        <img class="w-full h-full object-cover object-center" :src="pizza.fullImagePath" :alt="pizza.name" />
        <span v-if="pizza.discountPercent"
          class="absolute top-0 left-0 h-12 w-12 flex items-center justify-center bg-primary text-md font-bold rounded-full text-white">
          -{{ pizza.discountPercent }}%
        </span>
      </div>
      <div class="text-lg ps-5 flex flex-col gap-2 flex-1">
        <h3 class="uppercase text-[#b68a2c] hover:text-[#a58237] hover:underline cursor-pointer"
          @click="openPizzaInfo(pizza.id)">
          {{ pizza.name }}
        </h3>
        <div class="flex gap-2 w-full">
          <div class="flex flex-col">
            <span class="font-bold text-gray-500 line-through text-sm" v-if="pizza.discountPercent">
              {{ formatCurrency(pizza.price) }}
            </span>
            <span class="font-bold text-primary">
              {{ formatCurrency(pizza.priceAfterDiscount) }}
            </span>
          </div>
          <span class="ms-auto pe-3">
            Tot: <span class=" font-bold text-primary">{{ formatCurrency(totalPrice) }}</span>
          </span>
        </div>
        <div
          class=" flex items-center justify-center sm:justify-start border-b border-primary sm:border-0 pb-2 sm:pb-0 gap-3 order-1 mt-2 sm:mt-0 sm:order-2">
          <QuantityButtons @changeQuantity="setQuantity" :quantity="pizzaQuantity" />
        </div>
      </div>
    </div>
    <div class=" flex md:items-center justify-center absolute top-3 right-3 sm:static">
      <button
        class="bg-primary hover:bg-primary/80 text-white  flex items-center justify-center border rounded-md h-10 w-10"
        @click="removePizza()">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
