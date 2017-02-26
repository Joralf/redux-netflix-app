import { connect } from 'react-redux';
import Favorites from '../components/common/favorites.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    favorites: state.favorites.favorites,
  };
};

const favoritesContainer = connect(
  mapStateToProps,
)(Favorites);

export default favoritesContainer;
