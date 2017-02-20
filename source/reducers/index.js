import { combineReducers } from 'redux';
import favorites from './favorites';

const reduxApp = combineReducers({
  favorites,
});

export default reduxApp;
