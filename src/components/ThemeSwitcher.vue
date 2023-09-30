<template>
  <button @click="toggle" class="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
      <span v-if="value" class="text-gray-800 dark:text-gray-200">🌞</span>
      <span v-else class="text-gray-800 dark:text-gray-200">🌙</span>
  </button>
</template>

<script>
import { useDarkMode } from "vue-use-dark-mode";

export default {
  name: "ThemeSwitcher",
  setup() {
    const { value, toggle } = useDarkMode();
    return { value, toggle };
  },
};
</script>
