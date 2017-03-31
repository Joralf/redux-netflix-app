import React from 'react';

const MovieItem = ({ movie, onClick }) => (
  <li onClick={onClick} >
    {movie.show_title} by {movie.director}
  </li>
);

MovieItem.PropTypes = {
  movie: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func
};

export default MovieItem;
