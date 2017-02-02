import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Box, BoxHeader, BoxBody, BoxFooter } from './core';

class Tittel extends Component {
  render() {
    const { md, sm, xs } = this.props;
    return (
      <Col md={md} sm={sm} xs={xs}>
        <Box color="aqua">
          <BoxBody className="camp-link">Jentedagene</BoxBody>
        </Box>
      </Col>
    );
  }
}

export default Tittel;
