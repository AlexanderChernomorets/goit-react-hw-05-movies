import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchByQuery } from '../Services/fetchApi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest) {
      return;
    }

    const fetchMovie = () => {
      setLoading(true);
      fetchByQuery(searchRequest)
        .then(resp => {
          if (!resp.length) {
            alert('Movies not found, please try again!');
          }

          setMovies(resp);
        })
        .catch(error => {
          setError('404 Page Not Found');
        })
        .finally(setLoading(false));
    };
    fetchMovie();
  }, [searchRequest]);

  const onSubmit = value => {
    setSearchParams({ query: `${value}` });
  };

  return (
    <>
      {loading && 'Loading...'}
      {error && <div>{error}</div>}
      <SearchBar onSubmit={onSubmit} />
      {movies && <MovieList movies={movies} prevLocation={location} />}
    </>
  );
};

export default Movies;
