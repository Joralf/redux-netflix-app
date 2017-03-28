import React, { PropTypes } from 'react';
import Result from './result.jsx';

const Results = ({ results, onClick }) => {
  return (
    <ul>
      {results.map(result =>
        <Result value={result} onClick={(obj) => { onClick(obj); }} key={result.id}>
          {result.show_title} by {result.director}
        </Result>
      )}
    </ul>
  );
};

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    show_title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};

Results.defaultProps = {
  results: [],
};

export default Results;
