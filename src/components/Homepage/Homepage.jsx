import HomepageTitle from 'components/Homepage/HomepageTitle/HomepageTitle';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getMovies } from 'Services/fetchApi';

const GetTrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = () => {
      setLoading(true);
      getMovies()
        .then(result => {
          setMovies(result);
        })
        .catch(error => {
          setError('404 Page Not Found');
        })
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
  }, []);
  return (
    <>
      <HomepageTitle />
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default GetTrendingMovies;
