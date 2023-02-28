import axios from 'axios';

const API_KEY = '2d47787539d4eda04ce92011fd824a06';
const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = BASE_URL;

const END_POINTS = {
  trending: '/trending/movie/day',
  querySearch: '/search/movie',
  movieDetails: '/movie',
  movieCredits: '/credits',
  movieReviews: '/reviews',
};

export const getMovies = async (page = 1) => {
  const resp = await axios.get(
    `${END_POINTS.trending}?api_key=${API_KEY}&language=en-US&include_adult=false`
  );
  return resp.data.results;
};

export const getMovieDetails = async id => {
  const resp = await axios.get(
    `${END_POINTS.movieDetails}/${id}?api_key=${API_KEY}&language=en-US`
  );
  return resp.data;
};

export const fetchByQuery = async (query, page = 1) => {
  const resp = await axios.get(
    `${END_POINTS.querySearch}?api_key=${API_KEY}&page=${page}&query=${query}&language=en-US&include_adult=false`
  );
  return resp.data.results;
};

export const fetchReviews = async (id, page = 1) => {
  const resp = await axios.get(
    `${END_POINTS.movieDetails}/${id}/${END_POINTS.movieReviews}?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return resp.data.results;
};

export const fetchCredits = async id => {
  const resp = await axios.get(
    `movie/${id}${END_POINTS.movieCredits}?api_key=${API_KEY}&language=en-US`
  );
  return resp.data.cast;
};



