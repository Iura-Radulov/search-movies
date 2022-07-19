import axios from 'axios';
const KEY_API = '024bf82d4805f650033dc69997860333';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchPopularMovies() {
  return axios(`${BASE_URL}/trending/movie/day?api_key=${KEY_API}`).then(
    response => response.data
  );
}

export async function fetchMovies(name) {
  return axios(
    `${BASE_URL}/search/movie?api_key=${KEY_API}&page=1&query=${name}`
  ).then(response => response.data);
}
export async function fetchMovieDetails(movieId) {
  return axios(`${BASE_URL}/movie/${movieId}?api_key=${KEY_API}`).then(
    response => response.data
  );
}

export async function fetchMovieCredits(movieId) {
  return axios(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY_API}`).then(
    response => response.data
  );
}
export async function fetchMovieReviews(movieId) {
  return axios(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY_API}`).then(
    response => response.data
  );
}
