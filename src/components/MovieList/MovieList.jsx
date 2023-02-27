import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FilmsList, FilmsTitle } from './MovieList.styled';

const MovieList = ({ movies, prevLocation }) => {
  return (
    <>
      <FilmsList>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: prevLocation }}
              style={{ textDecoration: 'none' }}
            >
              <FilmsTitle>{original_title}</FilmsTitle>
            </Link>
          </li>
        ))}
      </FilmsList>
    </>
  );
};

export default MovieList;

MovieList.propTypes = {
  // prevLocation: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
