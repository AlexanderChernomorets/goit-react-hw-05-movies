import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Loader from './Loader/Loader';

const Homepage = lazy(() => import('./Homepage/Homepage'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage')
);
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>
          <Route path='*' element={<Homepage/>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
