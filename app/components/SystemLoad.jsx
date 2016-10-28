import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col, Table } from 'react-bootstrap';
import { Box, BoxHeader, BoxBody, BoxFooter } from './core';

const calcUsedMemory = (totalString, availString) => {
  const total = parseFloat(totalString);
  const avail = parseFloat(availString);
  const used = total - avail;
  const percent = (used / total) * 100;
  return Math.floor(percent);
};

class SystemLoad extends Component {
  static propTypes = {
    ...Col.propTypes,
    monitor: PropTypes.object
  }
  render() {
    const { md, sm, xs, monitor } = this.props;
    const values = monitor._value;
    if (!values) {
      return <div />;
    }
    return (
      <Col md={md} sm={sm} xs={xs}>
        <Box color="aqua">
          <BoxHeader title="System Load" />
          <BoxBody>
            <Table>
              <thead>
                <tr>
                  <th>Maskin</th>
                  <th>CPU</th>
                  <th>RAM</th>
                  <th>Bandwidth</th>
                  <th>Temperature</th>
                  <th>Uptime</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{ values.host }</td>
                  <td>{`${values.laLoad[0]}`}</td>
                  <td>{`${calcUsedMemory(values.memTotalReal, values.memAvailReal)} %`}</td>
                  <td>{ values.ifInOctets }</td>
                  <td>64 C</td>
                  <td>{ values.sysUpTimeInstance[0] }</td>
                </tr>
                <tr>
                  <td>{ values.host }</td>
                  <td>0.2</td>
                  <td>0.5</td>
                  <td>3000 kbit/s</td>
                  <td>58 C</td>
                  <td>5 Day 3 Hours 21 minutes</td>
                </tr>
                {/* {
                  this.props.logs.map(log =>
                    <tr key={log._id}>
                      <td>{system.name}</td>
                      <td>{system.cpu}</td>
                      <td>{system.ram}</td>
                      <td>{system.bandwidth}</td>
                      <td>{system.temperature}</td>
                      <td>{system.uptime}</td>
                    </tr>
                  )
                } */}
              </tbody>
            </Table>
          </BoxBody>
          <BoxFooter />
        </Box>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({
  monitor: state.api.monitor
});

export default connect(mapStateToProps)(SystemLoad);
