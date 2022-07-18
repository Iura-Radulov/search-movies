import axios from 'axios';
const KEY_API = '024bf82d4805f650033dc69997860333';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchPopularMovies() {
  const response = await axios(
    `${BASE_URL}/trending/movie/day?api_key=${KEY_API}`
  );
  const dates = await response.data;
  return dates;
}

export async function fetchMovies(name) {
  const response = await axios(
    `${BASE_URL}/search/movie?api_key=${KEY_API}&page=1&query=${name}`
  );
  const dates = await response.data;
  return dates;
}
export async function fetchMovieDetails(movieId) {
  const response = await axios(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY_API}`
  );
  const dates = await response.data;
  return dates;
}

export async function fetchMovieCredits(movieId) {
  const response = await axios(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY_API}`
  );
  const dates = await response.data;
  return dates;
}
export async function fetchMovieReviews(movieId) {
  const response = await axios(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY_API}`
  );
  const dates = await response.data;
  return dates;
}
