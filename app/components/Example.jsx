import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Box, BoxHeader, BoxBody, BoxFooter } from './core';

class Example extends Component {
  render() {
    const { md, sm, xs } = this.props;
    return (
      <Col md={md} sm={sm} xs={xs}>
        <Box color="aqua">
          <BoxHeader title="Title" />
          <BoxBody>My body content</BoxBody>
          <BoxFooter />
        </Box>
      </Col>
    );
  }
}

export default Example;
