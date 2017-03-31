import React, { PropTypes } from 'react';
import MovieItem from './movieItem.jsx';
import './movieList.scss';

const MovieList = ({ movies, buttonText, titleText, onClick }) => {
  return (
    <div>
      <h3>{titleText}</h3>
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
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    unit: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    show_title: PropTypes.string.isRequired,
  })),
  onClick: React.PropTypes.func.isRequired,
  titleText: React.PropTypes.string.isRequired,
  buttonText: React.PropTypes.string.isRequired,
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
