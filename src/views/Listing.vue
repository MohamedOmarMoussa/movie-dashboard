<!-- eslint-disable vue/multi-word-component-names -->

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import BaseTabs from "@/components/BaseTabs.vue";
import MovieCard from "@/components/MovieCard.vue";
import { type Movie, type Category } from "@/types/movie";
import { getMoviesByCategory } from "@/api/movies";

export default defineComponent({
  name: "Listing",
  components: {
    BaseTabs,
    MovieCard,
  },
  setup() {
    const categories: Category[] = [
      { id: 28, name: "Action" },
      { id: 16, name: "Animation" },
      { id: 12, name: "Adventure" },
      { id: 35, name: "Comedy" },
      { id: 99, name: "Documentary" },
    ];
    const selectedCategory = ref<Category>(categories[0]);
    const movies = ref<Movie[]>([]);

    const fetchMovies = (categoryId: number) => {
      getMoviesByCategory(categoryId).then((response) => {
        movies.value = response.data.results;
      });
    };

    const onChangeTab = (tab: Category) => {
      selectedCategory.value = tab;
      fetchMovies(tab.id);
    };

    onMounted(() => {
      fetchMovies(selectedCategory.value.id);
    });

    return {
      categories,
      selectedCategory,
      movies,
      onChangeTab,
    };
  },
});
</script>

<template>
  <div class="pt-20 w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
    <div class="col-span-3 p-8 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
      <BaseTabs
        :tabs="categories"
        v-model:selectedTab="selectedCategory"
        @changeTab="onChangeTab"
      />
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 rounded-2xl">
        <MovieCard
          v-for="(movie, index) in movies"
          :key="index"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>
