import { connect } from 'react-redux';
import { fetchMovies } from '../actions/search';
import Search from '../components/common/search.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    didInvalidate: state.search.didInvalidate,
    isFetching: state.search.results,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHandleChange: (queryString) => {
      dispatch(fetchMovies(queryString));
    }
  };
};

const searchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default searchContainer;
