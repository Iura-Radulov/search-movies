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
      <h2 className={s.title}>Tranding today</h2>
      <ul className={s.list}>
        {movies.map(movie => (
          <li className={s.item} key={movie.id}>
            <MovieItem movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}
