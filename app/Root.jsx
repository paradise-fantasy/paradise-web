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
import Heartrate from './components/Heartrate';
import Link from './components/Link';
import Tittel from './components/Tittel'

{ /* import Example from './components/Example'; */ }

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={2}>
            <Row>
              <Watch md={12} />
              <Presence md={12} />
            </Row>
          </Col>
          <Col md={5}>
            <Row>
              <Logs md={12} />
            </Row>
            <Row>
              <Tittel md={12} />
            </Row>
          </Col>
          <Col md={5}>
            <Row>
              <Music md={6} />
              <PreProjectCountdown md={6} />
              <Heartrate md={4} />
              <Link md={12} />
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);
