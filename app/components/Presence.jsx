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
    const { md, sm, xs, presence } = this.props;

    if (!presence._value) return <div />;
    const users = presence._value.status.map(status => {
      const name = Object.keys(status)[0];
      return { name, present: status[name] };
    });

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
                  users.map(user =>
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
            { presence._arrivedAt.format('HH:mm:ss') }
          </BoxFooter>
        </Box>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({
  presence: state.api.presence
});

export default connect(mapStateToProps)(Presence);
