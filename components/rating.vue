<template>
  <div class="flex items-center justify-start gap-1 mt-2">
    <img :src="isStarFavorite" />
    <div v-if="props.rating" class="text-sm font-semibold">
      {{ props.rating }}
      <span class="text-[#6F757C] mx-1">({{ props.votes }} votes)</span>
    </div>
    <strong v-else class="text-[#6F757C] text-sm">No Ratings</strong>
  </div>
</template>

<script setup lang="ts">
import star from "@/assets/images/Star.svg";
import starFill from "@/assets/images/Star_fill.svg";

type Props = {
  rating: number | string | null;
  votes: number;
  isFavorite: boolean;
};

const props = defineProps<Props>();
const isStarFavorite = props.isFavorite ? starFill : star;
</script>
