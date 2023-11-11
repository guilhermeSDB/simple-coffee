<template>
  <div>
    <div class="tab-content" v-show="props.title === selectedTitle">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedTitle = inject("selectedTitle");
const props = defineProps({
  title: { type: String },
});
</script>
