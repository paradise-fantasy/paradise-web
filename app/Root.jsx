import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';

import { Box, BoxHeader, BoxBody } from './components/core';
import ExampleSplineChart from './components/ExampleSplineChart';

class App extends Component {
  render() {
    return (
      <div>
        <header className="main-header">
          <Navbar>
            <Navbar.Brand>
              <a href="/">Paradise</a>
            </Navbar.Brand>
          </Navbar>
        </header>
        <Grid>
          <Row>
            <Col md={6}>
              <Box color="aqua">
                <BoxHeader title="En boks???" />
                <BoxBody>
                  <ExampleSplineChart />
                </BoxBody>
              </Box>
            </Col>
            <Col md={6}>
              <Box color="aqua">
                <BoxHeader title="En boks???" />
                <BoxBody>
                  <h1>Header 1</h1>
                  <h2>Header 2</h2>
                  <h3>Header 3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </BoxBody>
              </Box>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

/**
 * mapStateToProps injects App with properties derived
 * from the global redux state.
 *
 * In this example, we will inject a 'listItems' property
 * from the 'list' field in our redux state.
 */
const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);
