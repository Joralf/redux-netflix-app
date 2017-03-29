export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export function addFavorite(favorite) {
  return {
    type: 'ADD_FAVORITE',
    favorite,
  };
}

export function removeFavorite(unit) {
  return {
    type: 'REMOVE_FAVORITE',
    unit,
  };
}
