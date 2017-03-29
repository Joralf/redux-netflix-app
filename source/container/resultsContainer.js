import { connect } from 'react-redux';
import { addFavorite } from '../actions/favorites';
import Results from '../components/common/results.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    results: state.search.results,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (obj) => {
      dispatch(addFavorite(obj));
    }
  };
};

const resultListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

export default resultListContainer;
