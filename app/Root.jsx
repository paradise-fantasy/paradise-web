import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import PreProjectCountdown from './components/PreProjectCountdown';
import Logs from './components/Logs';
import Presence from './components/Presence';
import Watch from './components/Watch';
import SystemLoad from './components/SystemLoad';
import TemperatureChart from './components/TemperatureChart';
import Music from './components/Music';

{ /* import Example from './components/Example'; */ }

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={3}>
            <Row>
              <Presence md={12} />
            </Row>
          </Col>
          <Col md={5}>
            <Row>
              <Logs md={12} />
            </Row>
            <Row>
              <Music md={4} />
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <Watch md={6} />
              <PreProjectCountdown md={6} />
              <TemperatureChart md={12} />
              <SystemLoad md={12} />
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);
