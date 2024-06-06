<script setup>
import { onMounted, ref } from "vue";
import dropin from 'braintree-web-drop-in';
import { store } from "../../store.js";

const { authorization, loadingPayment, disabledButton, products } = defineProps({
  authorization: {
    required: true,
    type: String
  },
  loadingPayment: {
    required: true,
    type: Boolean
  },
  products: {
    required: true,
    type: Array
  }
})

const selectedAddress = ref({});

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

// onMounted(() => {
//   setupBraintree()
// })

</script>

<template>
  <div
    class="max-w-6xl min-h-[500px] mx-auto  px-2 border-t-2 border-b-2 border-primary rounded-2xl  bg-white my-5 shadow-xl shadow-black/20 flex flex-col"
    v-if="!loadingPayment">
    <div class="flex flex-col md:flex-row flex-1">
      <div class="md:w-[60%] w-full py-3 pt-6 px-3">
        <template v-if="store.user?.addresses.length > 0">
          <div v-for="address in store.user.addresses" :key="address.id">
            <div class="flex items-center ps-4 my-2 border border-gray-200 rounded dark:border-gray-700">
              <input :id="address.id" type="radio" value="" name="bordered-radio"
                class="w-4 h-4 text-primary bg-primary border-primary/85" @change="selectedAddress = address"
                :checked="selectedAddress === address">
              <label :for="address.id" class="w-full py-4 ms-2 text-sm font-medium text-gray-900">
                {{ address.road }}, {{ address.city }}, {{ address.country }}
                <span class="text-primary">{{ address.zipCode }}</span>
              </label>
            </div>
          </div>
        </template>
        <template v-else>
          <p class="text-primary text-sm text-center">Non hai ancora creato un indirizzo</p>
        </template>


        <div class="mt-3 text-center">
          <button class="text-primary hover:underline px-5 py-2 rounded text-sm cursor-pointer order-2 sm:order-1"
            @click="store.addressModalOpen = true">
            Inserisci un nuovo Indirizzo
          </button>
        </div>

      </div>

      <div id="dropin-container" class="md:w-[40%] w-full border border-red-500"></div>
    </div>
    <div class="p-3 flex items-center justify-center">
      <button
        class="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded text-sm cursor-pointer order-2 sm:order-1">
        Procedi con l'acquisto
      </button>
    </div>
  </div>
</template>

<style scoped></style>
