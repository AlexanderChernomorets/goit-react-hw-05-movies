import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'Services/fetchApi';

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
      <ul>
        {reviews.map(({ id, author, content }) => {
          return <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        })}
      </ul>
    </>
  );
};

export default Reviews;
