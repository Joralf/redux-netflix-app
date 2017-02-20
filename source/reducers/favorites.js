const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return Object.assign({}, state, {
        favorites: [
          ...state.favorites,
          {
            favorite: action.favorite,
          },
        ],
      });
    default:
      return state;
  }
};

export default favorites;
