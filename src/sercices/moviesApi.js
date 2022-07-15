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
    `${BASE_URL}search/movie?api_key=${KEY_API}&page=1&query=${name}`
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
// fetchPopularMovies().then(date => date.results);

// fetchByName('love').then(date => console.log(date));
// fetchMovieInformation(507086).then(date => console.log(date));

// async fetchFilmsCards(languageChoose) {
//     const KEY_API = '024bf82d4805f650033dc69997860333';
//     const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY_API}&page=${this.page}&language=${languageChoose}`;
//     const response = await fetch(url);
//     const dates = await response.json();
//     return dates;
//   }
