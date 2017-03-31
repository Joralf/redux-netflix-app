import React, { PropTypes } from 'react';
import MovieItem from './movieItem.jsx';

const MovieList = ({ movies, onClick }) => (
  <ul>
    {movies.map(movie =>
      <MovieItem movie={movie} key={movie.unit} onClick={() => onClick(movie)} />
    )}
  </ul>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    unit: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    show_title: PropTypes.string.isRequired,
  })),
  onClick: React.PropTypes.func.isRequired,
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
