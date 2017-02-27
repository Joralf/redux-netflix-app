import { connect } from 'react-redux';
import Favorites from '../components/common/favorites.jsx';
import { removeFavorite } from '../actions/favorites';

const mapStateToProps = (state, ownProps) => {
  return {
    favorites: state.favorites.favorites,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (obj) => {
      dispatch(removeFavorite(obj));
    }
  };
};

const favoritesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites);

export default favoritesContainer;
