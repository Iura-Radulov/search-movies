import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../sercices/moviesApi';
import { Link, useLocation } from 'react-router-dom';
import s from './Home.module.css';
import { HOST_URL } from '../../App';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchPopularMovies().then(date => setMovies(date.results));
  }, []);

  return (
    <div className={s.home}>
      <h2 className={s.title}>Tranding today</h2>
      <ul className={s.list}>
        {movies.map(movie => (
          <li className={s.item} key={movie.id}>
            <Link
              to={`${HOST_URL}movies/${movie.id}`}
              state={{ from: location }}
            >
              <div className={s.container}>
                <img
                  className={s.image}
                  src={
                    movie.backdrop_path &&
                    `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                  }
                  alt={movie.title}
                />
                <p className={s.imgTitle}>{movie.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
