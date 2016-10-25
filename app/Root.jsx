import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Navbar } from 'react-bootstrap';
import PreProjectCountdown from './components/PreProjectCountdown';
import Logs from './components/Logs';
import Presence from './components/Presence';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <PreProjectCountdown md={12} />
          <Presence md={3} />
          <Logs md={9} />
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);
