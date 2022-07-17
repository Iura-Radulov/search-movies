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
            <Link to={`/movies/${movie.id}`}>
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
