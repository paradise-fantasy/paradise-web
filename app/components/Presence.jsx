import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col, Table } from 'react-bootstrap';
import { Box, BoxHeader, BoxBody, BoxFooter } from './core';

class Presence extends Component {
  static propTypes = {
    ...Col.propTypes,
    presence: PropTypes.object
  }

  render() {
    const { md, sm, xs } = this.props;
    return (
      <Col md={md} sm={sm} xs={xs}>
        <Box color="aqua">
          <BoxHeader title="Kontorstatus" />
          <BoxBody className="status-table">
            <Table>
              <thead>
                <tr>
                  <th>Navn</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.presence &&
                  this.props.presence.status.map(user =>
                    <tr key={user.name}>
                      <td>
                        <span className={`user-status ${user.present ? 'present' : 'away'}`} />
                        {user.name}
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
          </BoxBody>
          <BoxFooter>
            <span style={{ marginRight: 5 }}>Siste endring:</span>
            { this.props.presence._arrivedAt
              ? this.props.presence._arrivedAt.format('HH:mm:ss')
              : '-'
            }
          </BoxFooter>
        </Box>
      </Col>
    );
  }
}

const mapStateToProps = (state) => {
  let presenceStatus = [];
  if (state.api.presence.status) {
    presenceStatus = state.api.presence.status.map(entry => {
      const name = Object.keys(entry);
      return { name, present: entry[name] };
    });
  }

  return {
    presence: { ...state.api.presence, status: presenceStatus }
  };
};

export default connect(mapStateToProps)(Presence);
