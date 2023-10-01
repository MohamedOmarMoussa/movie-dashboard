<!-- eslint-disable vue/multi-word-component-names -->

<script lang="ts">
import { defineComponent, ref } from "vue";
import MovieCard from "@/components/MovieCard.vue";
import { type Movie } from "@/types/movie";
import { getPopularMovies } from "@/api/movies";

export default defineComponent({
  name: "Home",
  components: {
    MovieCard,
  },
  setup() {
    const movies = ref<Movie[]>([]);
    const backgroundImage =
      "https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"; // Dune

      getPopularMovies().then((response) => {
        movies.value = response.data.results.slice(0, 4);
      });

      return {
        movies,
        backgroundImage,
      };
    },
  });
</script>

<template>
  <div class="pt-20 w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
    <div class="col-span-3 mb-8 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
      <div
        class="w-full bg-cover bg-center h-96 relative rounded-2xl overflow-hidden"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      >
      </div>
    </div>
    <div class="col-span-3 p-8 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
      <h3 class="text-lg text-gray-700 dark:text-white">New Releases</h3>
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
