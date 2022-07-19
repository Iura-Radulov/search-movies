import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieItem.module.css';

export default function MovieItem({ movie }) {
  const location = useLocation();

  return (
    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
      <div className={s.container}>
        <img
          className={s.image}
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : `https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg`
          }
          alt={movie.title}
        />
        <p className={s.imgTitle}>{movie.title}</p>
      </div>
    </Link>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    backdrop_path: PropTypes.string,
  }).isRequired,
};
