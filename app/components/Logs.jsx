import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col, Table } from 'react-bootstrap';
import { Box, BoxHeader, BoxBody, BoxFooter } from './core';

class Log extends Component {
  static propTypes = {
    ...Col.propTypes,
    logs: PropTypes.array
  }

  render() {
    const { md, sm, xs } = this.props;
    return (
      <Col md={md} sm={sm} xs={xs}>
        <Box color="aqua">
          <BoxHeader title="Tjenestelogging" />
          <BoxBody className="log-table">
            <Table>
              <thead>
                <tr>
                  <th>Tidspunkt</th>
                  <th>Tjeneste</th>
                  <th>Loggemelding</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.logs.map(log =>
                    <tr key={log._id}>
                      <td>{log._arrivedAt.format('HH:mm:ss - DD.MM')}</td>
                      <td>{log._service}</td>
                      <td>{log._value}</td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
          </BoxBody>
          <BoxFooter>
            <span style={{ marginRight: 5 }}>Siste logging:</span>
            { this.props.logs.length === 0
              ? '-'
              : this.props.logs[0]._arrivedAt.format('HH:mm:ss')
            }
          </BoxFooter>
        </Box>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({ logs: state.log });

export default connect(mapStateToProps)(Log);
