import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from '../configureStore';
import App from '../components/app.jsx';
import { fetchMovies } from '../actions/search';


let store = configureStore();
console.log(store.getState())

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };
}

store.dispatch(fetchMovies('Quentin Tarantino')).then(() =>
  console.log(store.getState())
)
