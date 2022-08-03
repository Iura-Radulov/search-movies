import { useEffect, useState } from 'react';
import { fetchPopularMovies } from 'services/moviesApi';
import s from './Home.module.css';
import MovieItem from 'components/MovieItem';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <div className={s.home}>
      <h2 className={s.title}>Trending today</h2>
      <ul className={s.list}>
        {movies.map(movie => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
}
