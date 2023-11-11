<template>
  <div class="w-full min-h-screen overflow-x-hidden bg-[#111315] fontFamily">
    <Banner />

    <div
      class="w-full max-w-sm md:max-w-7xl min-h-screen bg-[#1B1D1F] relative top-[-14rem] mx-auto rounded-xl p-14 md:p-24"
    >
      <Header />

      <TabsWrapper>
        <Tab title="All products">
          <CoffeeList />
        </Tab>
        <Tab title="Available Now">
          <CoffeeList :availablesOnly="true" />
        </Tab>
      </TabsWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from "nuxt/app";

const { fetchData } = useCoffeeStore();

const uri =
  "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";
const { data: coffeeData, pending, error, refresh } = await useFetch(uri);

fetchData(JSON.parse(toRaw(coffeeData.value) as string));
</script>
