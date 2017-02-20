import React, { PropTypes } from 'react';
import Result from './result.jsx';

const ResultList = ({ results, onResultClick }) => (
  <ul>
    {results.map(result =>
      <Result value={result} onClick={onResultClick} key={result.id}>
        {result.show_title} by {result.director}
      </Result>
    )}
  </ul>
);

ResultList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    show_title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onResultClick: PropTypes.func.isRequired,
};

ResultList.defaultProps = {
  results: [
    {
      show_title: 'Kill Bill',
      director: 'Quentin Tarantino',
      id: 1,
    },
    {
      show_title: 'Men In Black',
      director: 'Some guy',
      id: 2,
    },
  ],
};

export default ResultList;
