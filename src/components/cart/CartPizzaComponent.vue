<script setup>
import { formatCurrency } from "../../utilities/formatValue/formatCurrency";
import { onMounted, ref } from "vue";
import { apiRequest } from "../../utilities/axios/axiosInstance.js";
import { useRouter } from "vue-router";
import { getPizzaQuantity, setNewPizzaQuantity, removeToCart, getTotalPrice } from "../../utilities/cart/cart.js";

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
const totalPrice = ref(0);

console.log(pizza.value)
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

  setNewPizzaQuantity(pizzaId, quantity)

  totalPrice.value = getTotalPrice(pizzaId, pizza.value.priceAfterDiscount)
}



const removePizza = () => {
  console.log("cancella")
  removeToCart(pizzaId)
}

onMounted(() => {
  apiRequest.get(`/api/pizzas/${pizzaId}`)
    .then((response) => {
      pizza.value = response.data.data;
      totalPrice.value = getTotalPrice(pizzaId, pizza.value.priceAfterDiscount)
    })
})
</script>

<template>

  <div class="py-5 flex px-3">
    <div class="flex flex-col sm:flex-row sm:items-center border gap-3 flex-1">
      <div class="w-[150px] h-[150px] relative self-center">
        <img class="w-full h-full object-cover object-center" :src="pizza.fullImagePath" :alt="pizza.name" />
      </div>
      <div class="text-lg ps-5 flex flex-col gap-2 flex-1">
        <h3 class="uppercase text-[#b68a2c] hover:text-[#a58237] hover:underline cursor-pointer"
          @click="openPizzaInfo(pizza.id)">
          {{ pizza.name }}
        </h3>
        <div class="flex gap-2 w-full border">
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
          <button type="button" id="decrement-button" @click="setQuantity('decrement')"
            class="bg-primary hover:bg-primary/80 text-white hover:text-white/50 flex items-center justify-center border rounded-md h-10 w-10 ">
            <font-awesome-icon icon="fa-solid fa-minus" />
          </button>
          {{ pizzaQuantity }}
          <button type="button" id="increment-button" @click="setQuantity('increment')"
            class="bg-primary hover:bg-primary/80 text-white hover:text-white/50  flex items-center justify-center border rounded-md h-10 w-10 ">
            <font-awesome-icon icon="fa-solid fa-plus" />
          </button>
        </div>
      </div>
    </div>
    <div class=" flex md:items-center justify-center">
      <button
        class="bg-primary hover:bg-primary/80 text-white  flex items-center justify-center border rounded-md h-10 w-10"
        @click="removePizza()">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
