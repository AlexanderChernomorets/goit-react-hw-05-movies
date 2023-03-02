import axios from 'axios';

const KEY = '2d47787539d4eda04ce92011fd824a06';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async () => {
  const { data } = await axios('/trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });

  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios(`/movie/${movieId}`, {
    params: {
      api_key: KEY,
    },
  });

  return data;
};

export const fetchCredits = async movieId => {
  const { data } = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });

  return data.cast;
};

export const fetchReviews = async movieId => {
  const { data } = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });

  return data.results;
};

export const fetchByQuery = async query => {
  const { data } = await axios('/search/movie', {
    params: {
      api_key: KEY,
      include_adult: false,
      query,
    },
  });

  return data.results;
};

export const startImageUrl = 'https://image.tmdb.org/t/p/w500';

