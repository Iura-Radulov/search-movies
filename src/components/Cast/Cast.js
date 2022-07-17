import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'sercices/moviesApi';
import s from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  //   console.log(cast);

  return (
    <ul>
      {cast &&
        cast.map(item => (
          <li key={item.id}>
            <img
              className={s.image}
              src={
                item.profile_path &&
                `https://image.tmdb.org/t/p/w500${item.profile_path}`
              }
              alt=""
            />
            <p className={s.name}>
              Name: <span>{item.name}</span>
            </p>
            <p className={s.character}>
              Character: <span>{item.character}</span>
            </p>
          </li>
        ))}
    </ul>
  );
}
