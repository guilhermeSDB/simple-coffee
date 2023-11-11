import type { Coffee } from "~/types/coffee";

export const useCoffeeStore = defineStore("coffee", () => {
  const list = ref<Coffee[]>([]);
  const availables = computed(() =>
    list.value.filter((coffee) => coffee.available === true)
  );

  const fetchData = (data: Coffee[]) => (list.value = data);

  return { list, availables, fetchData };
});
