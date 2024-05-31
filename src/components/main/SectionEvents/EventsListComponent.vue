<script setup>
import { ref } from "vue";

const eventsArray = ref([
  {
    day: "02",
    month: "nov",
    name: "TRADITIONAL NAPOLITAIN PIES IN KYOTO PIZZA MERCATO",
    location: "204 E. Pizzetta Tommaso",
  },
  {
    day: "03",
    month: "nov",
    name: "terrazza patio dining space opening this weekend",
    location: "204 E. Pizzetta Tommaso",
  },
  {
    day: "05",
    month: "nov",
    name: "sienna private dining room with stépane brunn",
    location: "204 E. Pizzetta Tommaso",
  },
  {
    day: "06",
    month: "nov",
    name: "sienna private dining room with stépane brunn",
    location: "204 E. Pizzetta Tommaso",
  },
  {
    day: "07",
    month: "nov",
    name: "sienna private dining room with stépane brunn",
    location: "204 E. Pizzetta Tommaso",
  },
]);
</script>

<template>
  <section id="events" class="md:flex mt-10 mb-2 lg:h-[500px]">
    <div
      class="w-full min-h-[500px] md:w-1/2 bg-events bg-bottom/center bg-cover bg-no-repeat md:order-2"
    ></div>
    <!--right section-->
    <div
      class="md:w-1/2 h-[300px] md:h-full bg-cielo text-white py-8 overflow-auto md:order-1"
    >
      <div class="max-w-[80%] mx-auto">
        <div class="uppercase mb-5">
          <p class="text-xs text-primary">made with love</p>
          <h2 class="text-xl font-bold">delish pizza deals</h2>
        </div>
        <ul>
          <li
            v-for="(event, index) in eventsArray"
            :key="index"
            class="pt-5 pb-7 flex gap-3 [&:not(:last-child)]:border-b border-dashed border-[#ffa500]"
          >
            <div>
              <h3 class="text-3xl text-primary text-center">{{ event.day }}</h3>
              <p class="uppercase text-center font-bold text-xs">
                {{ event.month }}
              </p>
            </div>
            <!--date-->
            <div>
              <p class="uppercase font-bold text-sm">{{ event.name }}</p>
              <span class="text-primary text-sm capitalize">
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                {{ event.location }}
              </span>
            </div>
            <!--description-->
          </li>
        </ul>
      </div>
    </div>
    <!--left section-->
  </section>
</template>

<style scoped></style>
