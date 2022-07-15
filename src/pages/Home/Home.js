import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../sercices/moviesApi';
import { Link } from 'react-router-dom';
import s from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  // const arrayOfMovies = async () => {
  //   const data = await fetchPopularMovies();
  //   return data.results;
  // };
  useEffect(() => {
    fetchPopularMovies().then(date => setMovies(date.results));
  }, []);

  // console.log(arrayOfMovies);

  return (
    <div className={s.home}>
      <h2 className={s.title}>Tranding today</h2>
      <ul className={s.list}>
        {movies.map(movie => (
          <li className={s.item} key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
