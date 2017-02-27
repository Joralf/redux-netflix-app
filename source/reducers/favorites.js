const initialState = {
  favorites: []
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (state.favorites.findIndex(favorite => (favorite.id === action.favorite.id)) !== -1) {
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
        favorites: state.favorites.filter(favorite => (favorite.id !== action.id))
      });
    default:
      return state;
  }
};

export default favorites;
