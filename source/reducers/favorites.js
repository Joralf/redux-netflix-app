const initialState = {
  favorites: []
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (state.favorites.findIndex(obj => (obj.id === action.favorite.id)) !== -1) {
        return state;
      }
      return Object.assign({}, state, {
        favorites: [
          ...state.favorites,
          action.favorite,
        ],
      });
    default:
      return state;
  }
};

export default favorites;
