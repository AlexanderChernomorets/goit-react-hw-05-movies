import { useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from 'Services/fetchApi';
import {
  Container,
  Description,
  GoBackButton,
  Information,
  MoviePoster,
  MovieTitle,
  Overview,
  OverviewText,
  Score,
  Wrapper,
  WrapperDescription,
  Year,
} from './MovieDetailsPage.styled';

const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getYear = () => new Date(movie.release_date).getFullYear();

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(location?.state?.from ?? '/');
  };

  useEffect(() => {
    setLoading(true);
    getMovieDetails(movieId)
      .then(result => setMovie(result))
      .catch(error => setError('404 Page Not Found'))
      .finally(() => setLoading(false));
  }, [movieId]);
  return (
    <>
      <GoBackButton onClick={handleClick}>Go Back</GoBackButton>

      {loading && 'Loading...'}
      {error && <div>{error}</div>}
      {movie && (
        <Container>
          <Wrapper>
            <MoviePoster
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
            <WrapperDescription>
              <MovieTitle>{movie.title}</MovieTitle>
              <Year>{getYear()}</Year>
              <Description>
                User score: <Score>{movie.popularity}</Score>
              </Description>
              <div>
                <Overview>Overview</Overview>
                <OverviewText>{movie.overview}</OverviewText>
              </div>
            </WrapperDescription>
          </Wrapper>
        </Container>
      )}
      <hr />
      <Container>
        <Information>Additional Information</Information>
        <Wrapper>
          <NavLink to={`/movies/${movieId}/reviews`} state={location.state}>
            <p>Reviews</p>
          </NavLink>

          <NavLink
            to={`/movies/${movieId}/cast`}
            style={{ marginLeft: '20px' }}
            state={location.state}
          >
            <p>Cast</p>
          </NavLink>
        </Wrapper>
        <hr />
        <Outlet />
      </Container>
    </>
  );
};

export default MoviesDetailsPage;
