<script setup>
import { onMounted } from "vue";
import dropin from 'braintree-web-drop-in';
import { formatCurrency } from '../../utilities/formatValue/formatCurrency'
import { getCartTotalPrice } from '../../utilities/cart/cart'

const { authorization, loadingPayment, disabledButton, products } = defineProps({
  authorization: {
    required: true,
    type: String
  },
  loadingPayment: {
    required: true,
    type: Boolean
  },
  disabledButton: {
    required: true,
    type: Boolean
  },
  products: {
    required: true,
    type: Array
  }
})

const setupBraintree = () => {
  dropin.create({
    authorization,
    container: '#dropin-container'
  }, (err, instance) => {
    if (err) {
      console.error(err);
    } else {
      this.instance = instance;
    }
  });
}

onMounted(() => {
  setupBraintree()
})

</script>

<template>
  <div class="max-w-4xl mx-auto min-h-[500px] px-2">
    <div
      class=" flex flex-col border-t-2 border-b-2 border-primary rounded-2xl px-2 bg-white my-5 shadow-xl shadow-black/20 h-[250px]">

      <div class="px-5 py-5 border-b-[1px] border-primary font-semibold text-lg flex-1 overflow-y-auto">
        <div v-for="product in products" :key="product.id" class="flex justify-between py-2">
          <p>{{ product.quantity }} x {{ product.pizzaElement.name }}</p>
          <p class="text-primary">{{ formatCurrency(product.totalPrice) }}</p>
        </div>
      </div>

      <div class="p-3 py-5  flex justify-between text-xl font-semibold">
        <span>Totale:</span>
        <p>{{ formatCurrency(getCartTotalPrice()) }}</p>
      </div>

    </div>

    <div id="dropin-container"></div>
    <div class="p-3 flex items-center justify-center flex-1">
      <router-link :to="{ name: 'checkout' }"
        class="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded text-sm cursor-pointer order-2 sm:order-1">
        Procedi con l'acquisto
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
