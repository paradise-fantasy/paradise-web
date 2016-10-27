import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import PreProjectCountdown from './components/PreProjectCountdown';
import Logs from './components/Logs';
import Presence from './components/Presence';
import Watch from './components/Watch';
import SystemLoad from './components/SystemLoad';
import TemperatureChart from './components/TemperatureChart';

{ /* import Example from './components/Example'; */ }

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={3}>
            <Grid fluid>
              <Row>
                <Presence md={12} />
              </Row>
            </Grid>
          </Col>
          <Col md={5}>
            <Grid fluid>
              <Row>
                <Logs md={12} />
              </Row>
            </Grid>
          </Col>
          <Col md={4}>
            <Grid fluid>
              <Row>
                <Watch md={6} />
                <PreProjectCountdown md={6} />
                <TemperatureChart md={12} />
                <SystemLoad md={12} />
              </Row>
            </Grid>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);
