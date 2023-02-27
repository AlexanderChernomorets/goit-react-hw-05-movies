import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'Services/fetchApi';
import {
  Author,
  ReviewAuthor,
  ReviewList,
  ReviewText,
  Error,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const result = await fetchReviews(movieId);
        setReviews(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {error && <div>{error}</div>}
      <ReviewList>
        {reviews.length === 0 ? (
          <li>
            <Error>There is no reviews yet..</Error>
          </li>
        ) : (
          reviews.map(review => {
            console.log(review);
            return (
              <li key={review.id}>
                <ReviewAuthor>
                  Author: <Author>{review.author}</Author>
                </ReviewAuthor>
                <ReviewText>{review.content}</ReviewText>
              </li>
            );
          })
        )}
      </ReviewList>
    </>
  );
};

export default Reviews;
