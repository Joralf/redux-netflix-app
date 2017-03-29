import fetch from 'isomorphic-fetch';

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export function requestMovies(queryString) {
  return {
    type: 'SEARCH_MOVIES',
    queryString,
  };
}


function receiveMovies(queryString, results) {
  return {
    type: 'RECEIVE_MOVIES',
    queryString,
    results,
    receivedAt: Date.now()
  };
}

export function fetchMovies(queryString) {
  return (dispatch) => {
    dispatch(requestMovies(queryString));

    return fetch(`http://netflixroulette.net/api/api.php?director=${queryString}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveMovies(queryString, json))
      );
  };
}
