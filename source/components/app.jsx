import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Search from './common/search.jsx';
import FavoritesContainer from '../container/favoritesContainer.js';
import ResultsContainer from '../container/resultsContainer.js';
import NetflixLogo from '../../assets/netflix-logo.png';

import './app.scss';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Row className="menu">
          <Col xs={12} className="text-center">
            <img src={NetflixLogo} alt="netflix-logo" />
          </Col>
        </Row>
        <Row className="content">
          <Col xs={12} md={6}>
            <Search />
            <ResultsContainer />
          </Col>
          <Col xs={12} md={6}>
            <FavoritesContainer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
