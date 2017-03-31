import React, { PropTypes } from 'react';
import MovieItem from './movieItem.jsx';
import './movieList.scss';

const MovieList = ({ movies, buttonText, onClick }) => (
  <ul>
    {movies.map(movie =>
      <MovieItem
        movie={movie}
        key={movie.unit}
        buttonText={buttonText}
        onClick={() => onClick(movie)}
      />
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
  buttonText: React.PropTypes.string.isRequired,
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
