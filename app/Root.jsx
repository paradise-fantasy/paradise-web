import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Navbar } from 'react-bootstrap';
import PreProjectCountdown from './components/PreProjectCountdown';
import Logs from './components/Logs';
import Presence from './components/Presence';
import Watch from './components/Watch';
import SystemLoad from './components/SystemLoad';

{ /* import Example from './components/Example'; */ }

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <PreProjectCountdown md={6} />
          <Watch md={3} mdOffset={3} />
        </Row>
        <Row>
          <Presence md={3} />
          <Logs md={9} />
          {/* <Example md={4} /> */}
        </Row>
        <Row>
          <SystemLoad md={8} />
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);
