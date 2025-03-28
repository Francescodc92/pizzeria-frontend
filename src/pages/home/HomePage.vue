<script setup>
import { onMounted } from "vue";
import MainComponent from "../../components/main/MainComponent.vue";
import { apiRequest } from "../../utilities/axios/axiosInstance.js";
import { store } from "../../store.js";
import { useQuery } from '@tanstack/vue-query'
import { setDataInLocalStorage } from "../../utilities/localStorage/localStorageHelper.js";

const getPizzas = () => {
  apiRequest.get("/api/pizzas-with-discount").then((response) => {
    store.pizzas = response.data.data;
  });
};

const getUser = async() => {
  let user = null
  await apiRequest
    .get("/api/user")
    .then((response) => {
      store.user = response.data.data;
      setDataInLocalStorage("user", response.data.data);
      user = response.data.data
    })
    .catch((error) => {
      store.user = null;
      setDataInLocalStorage("user", null);
    });


    return user
}

const { isPending, isError, data, error } = useQuery({
  queryKey: ['user'],
  queryFn: getUser,
})

onMounted(() => {  
  getPizzas()
  getUser()
});
</script>

<template>
  <MainComponent />
</template>

<style scoped></style>
