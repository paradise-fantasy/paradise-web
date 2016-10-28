import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Box, BoxHeader, BoxBody, BoxFooter } from './core';
import Marquee from './core/Marquee';

class Music extends Component {
  render() {
    const { md, sm, xs } = this.props;
    return (
      <Col md={md} sm={sm} xs={xs}>
        <Box color="aqua">

          <div className="box-header">
            <h3 className="box-title">
              <Marquee>
                Get Lucky - Daft Punk Get Lucky - Daft Punk - Random Access Memories
              </Marquee>
            </h3>
          </div>
          <BoxBody>
            <div className="flex-container">
              <div className="cover">
                <img
                  src="https://i.scdn.co/image/405ee050d1976448c600cb9648e491e31ef87aed"
                  style={{ width: '100%' }}
                  alt="Her skulle det egentlig være et bilde av albumet, men det har skjedd en bitteliten feil, så det vises ikke. Kanskje Kabbe kan fikse det. Bare spør ham."
                />
              </div>
              <div className="controls">
                <div className="control-item">
                  <button className="music-button">
                    <span className="glyphicon glyphicon-pause" aria-hidden="true" />
                  </button>
                </div>
                <div className="control-item">
                  <button className="music-button">
                    <span className="glyphicon glyphicon-step-forward" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </BoxBody>
        </Box>
      </Col>
    );
  }
}

export default Music;
