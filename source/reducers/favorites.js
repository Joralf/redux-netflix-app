const initialState = {
  favorites: []
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (state.favorites.findIndex(favorite => (favorite.unit === action.favorite.unit)) !== -1) {
        return state;
      }
      return Object.assign({}, state, {
        favorites: [
          ...state.favorites,
          action.favorite,
        ],
      });
    case 'REMOVE_FAVORITE':
      return Object.assign({}, state, {
        favorites: state.favorites.filter(favorite => (favorite.unit !== action.unit))
      });
    default:
      return state;
  }
};

export default favorites;
