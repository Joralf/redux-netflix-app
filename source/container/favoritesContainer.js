import { connect } from 'react-redux';
import MovieList from '../components/common/movieList.jsx';
import { removeFavorite } from '../actions/favorites';

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.favorites.favorites,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (movie) => {
      dispatch(removeFavorite(movie.unit));
    }
  };
};

const favoritesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);

export default favoritesContainer;
