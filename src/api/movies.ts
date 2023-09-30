import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = () => {
  return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
};

export const getMoviesByCategory = (categoryId: number) => {
  return axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${categoryId}`
  );
};
