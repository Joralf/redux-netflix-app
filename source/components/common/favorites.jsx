import React, { PropTypes } from 'react';
import Favorite from './favorite.jsx';

const Favorites = ({ favorites }) => (
  <ul>
    {favorites.map(favorite =>
      <Favorite key={favorite.id}>
        {favorite.show_title} by {favorite.director}
      </Favorite>
    )}
  </ul>
);

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    show_title: PropTypes.string.isRequired,
  })),
};

Favorites.defaultProps = {
  favorites: [],
};

export default Favorites;
