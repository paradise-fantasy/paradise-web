import React, { Component } from 'react';
import { Col, Table } from 'react-bootstrap';
import { Box, BoxHeader, BoxBody, BoxFooter } from './core';

class Example extends Component {
  render() {
    const { md, sm, xs } = this.props;
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
                  <td>fagervoll</td>
                  <td>0.3</td>
                  <td>0.8</td>
                  <td>500 kbit/s</td>
                  <td>64 C</td>
                  <td>1 Day 13 Hours 43 minutes</td>
                </tr>
                <tr>
                  <td>freddyny</td>
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

export default Example;
