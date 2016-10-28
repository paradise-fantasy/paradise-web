import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { Box, BoxHeader, BoxBody, BoxFooter } from './core';
import Marquee from './core/Marquee';
import socket from '../socket';

class Music extends Component {
  static propTypes = {
    ...Col.propTypes,
    spotify: PropTypes.object
  }

  playPause() {
    console.log('play-pause');
    socket.emit('spotify', 'play-pause');
  }
  nextSong() {
    console.log('next-song');
    socket.emit('spotify', 'next');
  }
  render() {
    const { md, sm, xs, spotify } = this.props;

    let music = {};
    if (spotify._value) music = spotify._value;

    return (
      <Col md={md} sm={sm} xs={xs}>
        <Box color="aqua">

          <div className="box-header">
            <h3 className="box-title">
              <Marquee>
                {`${music.title} - ${music.artist}` }
              </Marquee>
            </h3>
          </div>
          <BoxBody>
            <div className="flex-container">
              <div className="cover">
                <img
                  src={`${music.albumArt}`}
                  style={{ width: '100%' }}
                  alt="Her skulle det egentlig være et bilde av albumet, men det har skjedd en bitteliten feil, så det vises ikke. Kanskje Kabbe kan fikse det. Bare spør ham."
                />
              </div>
              <div className="controls">
                <div className="control-item">
                  <button className="music-button" onClick={this.playPause}>
                    { music.status === 'Playing'
                      ? <span className="glyphicon glyphicon-pause" aria-hidden="true" />
                      : <span className="glyphicon glyphicon-play" aria-hidden="true" />
                    }
                  </button>
                </div>
                <div className="control-item" onClick={this.nextSong}>
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

const mapStateToProps = (state) => ({
  spotify: state.api.spotify
});

export default connect(mapStateToProps)(Music);
