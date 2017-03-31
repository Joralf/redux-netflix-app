import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

import './movieItem.scss';

const MovieItem = ({ movie, onClick, buttonText }) => (
  <li>
    <div className="movie-item-container">
      <div className="poster" >
        <img src={movie.poster} alt="movie-poster" />
      </div>
      <span className="info-container">
        <h3 className="title">{movie.show_title} ({movie.release_year})</h3>
        <h4 className="director"> by {movie.director}</h4>
        <div className="extra-info-row">{movie.rating}*, {movie.category}</div>
        <div className="summary">{movie.summary}</div>
        <Button className="button" onClick={onClick}>
          {buttonText}
        </Button>
      </span>

    </div>
  </li>
);

MovieItem.PropTypes = {
  movie: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func,
  buttonText: React.PropTypes.buttonText,
};

export default MovieItem;
