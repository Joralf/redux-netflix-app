import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Search from './common/search.jsx';
import Favorites from './common/favorites.jsx';
import ResultList from './common/resultList.jsx';
import NetflixLogo from '../../assets/netflix-logo.png';

import './app.scss';

class App extends React.Component {
  onResultClick() {
    console.log("dispatch action");
  }
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
            <ResultList onResultClick={this.onResultClick} />
          </Col>
          <Col xs={12} md={6}>
            <Favorites />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
