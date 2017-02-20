import React, { PropTypes } from 'react';

const Result = ({ onClick, value, children }) => (
  <li onClick={() => onClick(value)}>
    { children }
  </li>
);

Result.PropTypes = {
  children: React.PropTypes.node.isRequired,
  value: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Result;
