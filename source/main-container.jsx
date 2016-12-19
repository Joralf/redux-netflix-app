import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Search from './components/search.jsx';
import Favorites from './components/favorites.jsx';
import NetflixLogo from '../assets/netflix-logo.png';

import './main.scss';

class MainComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <Row className="menu">
          <Col xs={12} className="text-center">
            <Row>
              <Col xs={12}><img src={NetflixLogo} /></Col>
            </Row>
          </Col>
        </Row>
        <Row className="content">
          <Col xs={12} md={6}>
            <Search />
          </Col>
          <Col xs={12} md={6}>
            <Favorites />
          </Col>
        </Row>
      </div>
    );
  }
}

export default MainComponent;
