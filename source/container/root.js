import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import App from '../components/app.jsx';
import { fetchMovies } from '../actions/search';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

store.dispatch(fetchMovies('Quentin Tarantino')).then(() =>
  console.log(store.getState())
);
