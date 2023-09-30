export interface Movie {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
}

export interface Category {
  id: number;
  name: string;
}
