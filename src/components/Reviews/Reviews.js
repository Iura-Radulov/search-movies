import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../sercices/moviesApi';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  //   console.log(reviews);

  return reviews && reviews.total_results === 0 ? (
    <p>We don't have any reviwers for this movie</p>
  ) : (
    <ul>
      {reviews &&
        reviews.results.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
    </ul>
  );
}
