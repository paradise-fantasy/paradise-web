import moment from 'moment';
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Box, BoxHeader, BoxBody, BoxFooter } from './core';

class Watch extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    setInterval(() => {
      const newState = {
        hour: moment().format('HH'),
        minute: moment().format('mm')
      };
      this.setState(newState);
    }, 1000);
  }
  render() {
    const { md, sm, xs, mdOffset } = this.props;
    const { hour, minute, time } = this.state;
    return (
      <Col md={md} sm={sm} xs={xs} mdOffset={mdOffset}>
        <Box color="aqua">
          <BoxBody>
            <p className="watch"> { hour }:{ minute }</p>

          </BoxBody>
        </Box>
      </Col>
    );
  }
}

export default Watch;
