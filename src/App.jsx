import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

const Link = styled(NavLink)`
  display: inline-block;
  padding: 20px;
  font-weight: 500;
  color: #2a363b;
  font-size: 22px;
  &.active {
    color: #2196f3;
  }
`;

export const HOST_URL = '/goit-react-hw-05-movies/';

export const App = () => {
  return (
    <>
      <nav className="navigation">
        <Link to={HOST_URL}>Home</Link>
        <Link to={`${HOST_URL}movies`}>Movies</Link>
      </nav>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={HOST_URL} element={<Home />} />
            <Route path={`${HOST_URL}movies`} element={<Movies />} />
            <Route
              path={`${HOST_URL}movies/:movieId`}
              element={<MovieDetails />}
            >
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
