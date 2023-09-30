<script lang="ts">
import { defineComponent, type PropType, computed, ref } from 'vue';
import { useStore } from '@/stores';
import { type Movie } from '@/types/movie';

export default defineComponent({
  name: 'MovieCard',
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const showFullOverview = ref(false);

    const isFavorite = computed(() => store.isFavorite(props.movie));

    const toggleFavorite = () => {
      if (isFavorite.value) {
        store.removeFavorite(props.movie);
      } else {
        store.addFavorite(props.movie);
      }
    };

    const toggleFullOverview = () => {
      showFullOverview.value = !showFullOverview.value;
    };

    const truncatedOverview = computed(() => {
      const maxLength = 150;
      return props.movie.overview.length > maxLength
        ? props.movie.overview.slice(0, maxLength) + '...'
        : props.movie.overview;
    });

    return { showFullOverview, isFavorite, toggleFavorite, toggleFullOverview, truncatedOverview };
  },
});
</script>

<template>
  <div class="">
    <img
      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
      alt="Movie poster"
      class="w-full h-auto object-cover rounded-t-2xl"
    />
    <div class="p-4 bg-gray-200 rounded-b-2xl">
      <h3 class="text-lg font-semibold truncate">{{ movie.title }}</h3>
      <p class="text-sm text-gray-600 mt-2" v-if="!showFullOverview">
        {{ truncatedOverview }}
        <span class="text-primary cursor-pointer" @click="toggleFullOverview">
          Read More
        </span>
      </p>
      <p class="text-sm text-gray-600 mt-2" v-else>
        {{ movie.overview }}
        <span class="text-primary cursor-pointer" @click="toggleFullOverview">
          Read Less
        </span>
      </p>
      <div class="flex items-center justify-between mt-4">
        <span class="text-sm font-bold text-[#f88fc2]">{{ movie.vote_average }}/10</span>
        <button
          @click="toggleFavorite"
          class="text-sm font-bold text-white bg-primary px-2 py-1 rounded-lg"
        >
          {{ isFavorite ? "-" : "+" }}
        </button>
      </div>
    </div>
  </div>
</template>
