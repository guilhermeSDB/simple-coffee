<template>
  <div class="mt-10 flex mx-auto w-10/12">
    <ul class="flex flex-wrap items-center justify-center gap-y-14 gap-x-4">
      <div v-for="coffee in data">
        <CoffeeCard :coffee="coffee" :key="coffee.id" />
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  availablesOnly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  availablesOnly: false,
});

const coffeeStore = useCoffeeStore();
const { list, availables } = storeToRefs(coffeeStore);

const data = props.availablesOnly ? availables : list;
</script>
