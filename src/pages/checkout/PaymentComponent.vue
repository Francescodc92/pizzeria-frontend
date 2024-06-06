<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import dropin from 'braintree-web-drop-in';
import { toast } from "../../utilities/toast/toastInstance.js";
import { apiRequest } from "../../utilities/axios/axiosInstance.js";
import { store } from "../../store.js";
import { setDataInLocalStorage } from "../../utilities/localStorage/localStorageHelper.js";

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

let instanceElement = null
const selectedAddress = ref(null);
const router = useRouter();

const setupBraintree = () => {
  dropin.create({
    authorization,
    container: '#dropin-container'
  }, (err, instance) => {
    if (err) {
      console.error(err);
    } else {
      instanceElement = instance;
    }
  });
}

const deleteAddress = (addressId) => {
  apiRequest.delete(`/api/user/address/${addressId}`)
    .then((response) => {
      store.user.addresses = store.user.addresses.filter((address) => address.id !== addressId);
      toast.success("indirizzo eliminato", {
        position: "top-right",
      })
    })
}

const submitPayment = () => {

  if (!selectedAddress.value) {
    toast.error("seleziona un indirizzo", {
      position: "top-right",
    })
    return;
  } else if (store.cart.length === 0) {
    toast.error("carrello vuoto", {
      position: "top-right",
    })
    return;
  }

  if (instanceElement) {
    instanceElement.requestPaymentMethod((err, payload) => {
      if (err) {
        console.error(err);
      } else {
        processPayment(payload.nonce);
      }
    });
  }
}

const processPayment = (nonce) => {
  const pizzas = store.cart.map((pizzaElement) => {
    return { pizza: pizzaElement.pizzaId, quantity: pizzaElement.quantity }
  })

  apiRequest.post("/api/orders/make/payment", {
    token: nonce,
    pizzas,
    userAddress: { ...selectedAddress.value, zip_code: selectedAddress.value.zipCode }
  })
    .then((response) => {
      store.cart = [];
      setDataInLocalStorage("cart", store.cart);
      store.cartModalOpen = false;
      router.push({ name: "checkout" });
      toast.success("pagamento effettuato con successo", {
        position: "top-right",
      })
    })
    .catch((error) => {
      console.log(error);
      toast.error("errore durante il processo di pagamento", {
        position: "top-right",
      })
    })
}

onMounted(() => {
  setupBraintree()
})

</script>

<template>
  <div
    class="max-w-6xl min-h-[300px] mx-auto  px-2 border-t-2 border-b-2 border-primary rounded-2xl  bg-white my-5 shadow-xl shadow-black/20 flex flex-col"
    v-if="!loadingPayment">
    <div class="flex flex-col md:flex-row flex-1">
      <div class="md:w-[50%] w-full h-[300px] py-3 pt-10 px-3 overflow-y-auto ">
        <template v-if="store.user?.addresses.length > 0">
          <div v-for="address in store.user.addresses" :key="address.id">
            <div class="flex items-center my-2 border border-gray-200 rounded dark:border-gray-300 px-4">
              <input :id="address.id" type="radio" value="" name="bordered-radio"
                class="w-4 h-4 text-primary bg-primary border-primary/85" @change="selectedAddress = address"
                :checked="selectedAddress?.id === address.id">
              <label :for="address.id" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 cursor-pointer">
                {{ address.road }}, {{ address.city }}, {{ address.country }}
                <span class="text-primary">{{ address.zipCode }}</span>
              </label>
              <button
                class="bg-primary hover:bg-primary/80 text-white px-3 py-2 rounded text-sm cursor-pointer order-2 sm:order-1"
                @click="deleteAddress(address.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </div>
          </div>
        </template>
        <template v-else>
          <p class="text-gray-500 text-lg text-center">Non hai ancora inserito nessun indirizzo</p>
        </template>


        <div class="mt-3 text-center">
          <button class="text-primary hover:underline px-5 py-2 rounded text-sm cursor-pointer order-2 sm:order-1"
            @click="store.addressModalOpen = true">
            Inserisci un nuovo Indirizzo
          </button>
        </div>

      </div>

      <div id="dropin-container" class="md:w-[50%] w-full mt-4"></div>
    </div>
    <div class="p-3 mt-5 flex items-center justify-center">
      <button
        class="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded text-sm cursor-pointer order-2 sm:order-1 disabled:bg-primary/50 disabled:cursor-not-allowed"
        @click="submitPayment()">
        Procedi con l'acquisto
      </button>
    </div>
  </div>
</template>

<style scoped></style>
