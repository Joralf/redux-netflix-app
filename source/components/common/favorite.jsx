import React, { PropTypes } from 'react';

const Favorite = ({ children, onClick }) => (
  <li onClick={onClick} >
    { children }
  </li>
);

Favorite.PropTypes = {
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func
};

export default Favorite;
