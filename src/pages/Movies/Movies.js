import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovies } from '../../sercices/moviesApi';
import s from './Movies.module.css';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    query && fetchMovies(query).then(movie => setMovies(movie));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input type="text" name="query" className={s.input} />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      <ul>
        {movies &&
          movies.results.map(movie => (
            <li key={movie.id} className={s.list}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {' '}
                {movie.title}
              </Link>
            </li>
          ))}
        {movies && movies.total_results === 0 && (
          <p>No results on your search</p>
        )}
      </ul>
    </>
  );
}
