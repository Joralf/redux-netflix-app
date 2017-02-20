export const ADD_FAVORITE = 'ADD_FAVORITE';

export function addFavorite(favorite) {
  return {
    type: 'ADD_FAVORITE',
    favorite,
  };
}
