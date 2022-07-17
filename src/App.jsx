import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import Home from './pages/Home';
// import { fetchPopularMovies } from './sercices/moviesApi';
import styled from 'styled-components';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

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

export const App = () => {
  return (
    <>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};
