const initialState = {
  isFetching: false,
  didInvalidate: false,
  results: []
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_MOVIES':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case 'RECEIVE_MOVIES':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        results: action.results,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

export default search;
