<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { defineComponent, computed } from "vue";
import MovieCard from "@/components/MovieCard.vue";
import { useStore } from "@/stores";

export default defineComponent({
  name: "Favorites",
  components: {
    MovieCard,
  },
  setup() {
    const store = useStore();

    const favorites = computed(() => store.favorites);

    return {
      favorites,
    };
  },
});
</script>

<template>
  <div class="pt-20 w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
    <div class="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
      <div v-if="favorites.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 rounded-2xl">
        <MovieCard
        v-for="(movie, index) in favorites"
        :key="index"
        :movie="movie"
        :isFavorite="true"
        />
      </div>
      <div v-else class="text-lg text-gray-700 dark:text-white text-center">
        You don't have any favorite movie yet😁.
      </div>
    </div>
  </div>
</template>
