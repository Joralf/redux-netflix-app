import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';

import Root from './container/root';

render(
  <Root />,
  document.getElementById('app')
)
