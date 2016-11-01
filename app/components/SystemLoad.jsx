import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col, Table } from 'react-bootstrap';
import { Box, BoxHeader, BoxBody, BoxFooter } from './core';

class SystemLoad extends Component {
  static propTypes = {
    ...Col.propTypes,
    monitor: PropTypes.object
  }
  renderMemoryColor(memory) {
    const memoryInt = parseInt(memory.slice(0, 2), 10);
    if (memoryInt <= 34) {
      return (
        <td><div className="low">{ memory }</div></td>
      );
    } else if (memoryInt <= 67) {
      return (
        <td><div className="medium">{ memory }</div></td>
      );
    }
    return (
      <td><div className="high">{ memory }</div></td>
    );
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
          <BoxHeader title="Systemovervåking" />
          <BoxBody>
            <Table>
              <thead>
                <tr>
                  <th>Maskin</th>
                  <th>Oppetid</th>
                  <th>Prosessor</th>
                  <th>Minne</th>
                  <th>Båndbredde</th>
                </tr>
              </thead>
              <tbody>
                {
                  Object.keys(values).map(host =>
                    <tr>
                      <td>{ values[host].Host[0] }</td>
                      <td>{ values[host].Uptime[0] }</td>
                      <td>{ values[host].Load[0][0] }</td>
                      { this.renderMemoryColor(values[host].Memory[0]) }
                      <td>{ values[host].Bandwidth[0] }</td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
          </BoxBody>
          <BoxFooter>
            Siste oppdatering: { monitor._arrivedAt.format('HH:mm:ss') }
          </BoxFooter>
        </Box>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({
  monitor: state.api.monitor
});

export default connect(mapStateToProps)(SystemLoad);
