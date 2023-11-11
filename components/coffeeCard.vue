<template>
  <div class="w-72 rounded-xl">
    <div class="relative">
      <img :src="coffee.image" alt="" class="w-full rounded-xl" />
      <UBadge
        v-if="coffee.popular"
        class="absolute top-3 left-3 rounded-3xl"
        color="amber"
        variant="solid"
        >Popular</UBadge
      >
    </div>
    <div class="my-2 flex justify-between">
      <div>
        <h3 class="font-bold text-[1rem]">{{ coffee.name }}</h3>

        <Rating
          :rating="coffee.rating"
          :votes="coffee.votes"
          :isFavorite="true"
        />
      </div>
      <div class="flex flex-col justify-between items-end">
        <div
          class="font-bold text-[0.75rem] text-black px-2 py-1 bg-[#BEE3CC] rounded-md"
          v-text="coffee.price"
        ></div>
        <strong v-if="!coffee.available" class="text-customRed text-sm mb-1">
          Sold out
        </strong>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Coffee } from "~/types/coffee";

const { coffee } = defineProps<{ coffee: Coffee }>();
</script>
