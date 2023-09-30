import { defineStore } from 'pinia';
import { type Movie } from '@/types/movie';

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    favorites: [] as Movie[],
  }),
  getters: {
    isFavorite: (state) => (movie: Movie) => {
      return state.favorites.some(favorite => favorite.id === movie.id);
    },
  },
  actions: {
    addFavorite(movie: Movie) {
      this.favorites.push(movie);
    },
    removeFavorite(movie: Movie) {
      this.favorites = this.favorites.filter(
        (favorite) => favorite.id !== movie.id
      );
    },
  },
});

