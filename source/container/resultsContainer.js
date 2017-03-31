import { connect } from 'react-redux';
import { addFavorite } from '../actions/favorites';
import MovieList from '../components/common/movieList.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.search.results,
    buttonText: "Save to Favorites"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (movie) => {
      dispatch(addFavorite(movie));
    }
  };
};

const resultListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default resultListContainer;
