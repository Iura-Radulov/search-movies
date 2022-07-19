import { useEffect, useState, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/moviesApi';
import s from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home';

  useEffect(() => {
    fetchMovieDetails(movieId).then(data => setMovie(data));
  }, [movieId]);

  const { genres, backdrop_path, overview, title } = movie;
  return (
    <div className={s.section}>
      <Link to={backLinkHref} className={s.button}>
        Go Back
      </Link>
      <div className={s.container}>
        <img
          className={s.image}
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
              : `https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg`
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
        <ul className={s.additionalList}>
          <li className={s.additionalLink}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={s.additionalLink}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet className={s.outlet} />
        </Suspense>
      </div>
    </div>
  );
}
