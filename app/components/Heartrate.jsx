import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { Box, BoxHeader, BoxBody, BoxFooter } from './core';

class Heartrate extends Component {
  static propTypes = {
    ...Col.propTypes,
    heartrate: PropTypes.object
  }
  render() {







    return <div />;








    const { md, sm, xs, heartrate } = this.props;
    const values = heartrate._value;
    if (!values) {
      return <div />;
    }
    return (
      <Col md={md} sm={sm} xs={xs}>
        <Box color="aqua">
          <BoxHeader title="Puls" />
          <BoxBody>
            <div className="heartrate">
              { values.heartrate }
            </div>
          </BoxBody>
          <BoxFooter />
        </Box>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({
  heartrate: state.api.heartrate
});

export default connect(mapStateToProps)(Heartrate);
