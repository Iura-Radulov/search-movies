import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/moviesApi';
import s from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <ul className={s.list}>
      {cast &&
        cast.map(item => (
          <li key={item.id}>
            <img
              className={s.image}
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  : `https://www.rabrotech.com/upload/default/image-not-found.png`
              }
              alt="actor foto"
              loading="lazy"
            />
            <p className={s.name}>
              <span className={s.label}>Name: </span>
              <span>{item.name}</span>
            </p>
            <p className={s.character}>
              <span className={s.label}>Character: </span>
              <span>{item.character}</span>
            </p>
          </li>
        ))}
    </ul>
  );
}
