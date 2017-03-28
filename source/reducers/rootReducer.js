import { combineReducers } from 'redux';
import favorites from './favorites';
import search from './search';

const rootReducer = combineReducers({
  favorites,
  search
});

export default rootReducer;
