import React, { PropTypes } from 'react';

const Favorite = ({ children }) => (
  <li>
    { children }
  </li>
);

Favorite.PropTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Favorite;
