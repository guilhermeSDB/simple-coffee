<template>
  <div>
    <ul class="flex items-center justify-center gap-4 my-6">
      <li
        v-for="title in tabTitles"
        :key="title"
        @click="selectedTitle = title"
        :class="{
          'bg-gray-500': title === selectedTitle,
          'px-4 py-2 rounded-xl cursor-pointer transition-all hover:brightness-110': true,
        }"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots } from "vue";

const slots = useSlots();
const tabTitles = ref(slots.default().map((tab: any) => tab.props.title));
const selectedTitle = ref(tabTitles.value[0]);

provide("selectedTitle", selectedTitle);
</script>

<!-- bg-gray-500 px-4 py-2 rounded-xl cursor-pointer transition-all hover:brightness-110 -->
