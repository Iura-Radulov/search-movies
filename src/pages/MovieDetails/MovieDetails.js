// import Cast from 'components/Cast';
// import Reviews from 'components/Reviews';
import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../../sercices/moviesApi';
import s from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieDetails(movieId).then(data => setMovie(data));
  }, [movieId]);
  //   fetchMovieDetails(movieId).then(data => console.log(data));
  // console.log(movie);
  const {
    // vote_average,
    // vote_count,
    genres,
    // original_title,
    // poster_path,
    backdrop_path,
    // original_name,
    // popularity,
    overview,
    title,
    // id,
  } = movie;
  return (
    <div className={s.section}>
      <button className={s.button} type="button">
        Go Back
      </button>
      <div className={s.container}>
        <img
          className={s.image}
          src={
            backdrop_path && `https://image.tmdb.org/t/p/w500${backdrop_path}`
          }
          alt={title}
        />
        <div className={s.movieInfo}>
          <h2 className={s.title}>{title}</h2>
          <h3 className={s.overviewTitle}>Overview</h3>
          <p className={s.overview}>{overview}</p>
          <h3 className={s.genresTitle}>Genres</h3>
          <ul className={s.genresList}>
            {genres &&
              genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
      <div className={s.additional}>
        <h3 className={s.additionalTitle}>Additional information</h3>
        <ul>
          <li className={s.additionalLink}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={s.additionalLink}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
