import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { Box, BoxHeader, BoxBody } from './core';

const deadline = moment()
  .year(2017)
  .month('April')
  .date(15)
  .hour(23)
  .minute(59)
  .second(0);

class PreProjectCountdown extends Component {
  static propTypes = {
    ...Col.propTypes
  }

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    setInterval(() => {
      const timeLeft = deadline.diff(moment(), 'milliseconds');
      const duration = moment.duration(timeLeft);

      const newState = {
        totalDays: Math.floor(duration.asDays()),
        days: duration.days(),
        hours: duration.hours() - 1,
        minutes: duration.minutes() + 1,
        seconds: duration.seconds()
      };


      if (newState.hours < 10) newState.hours = `0${newState.hours}`;
      if (newState.minutes < 10) newState.minutes = `0${newState.minutes}`;
      if (newState.seconds < 10) newState.seconds = `0${newState.seconds}`;
      if (newState.milliseconds < 10) newState.milliseconds = `00${newState.milliseconds}`;
      else if (newState.milliseconds < 100) newState.milliseconds = `0${newState.milliseconds}`;

      this.setState(newState);
    }, 1000);
  }

  render() {
    const { md, sm, xs } = this.props;
    const { totalDays, days, hours, minutes, seconds } = this.state;
    return (
      <Col md={md} sm={sm} xs={xs}>
        <Box color="aqua">
          <BoxBody>
            <h1 className="counter-header">Husk å søke KOMTEK innen:</h1>
            <div className="counter">

              <h1>{ totalDays } dager</h1>
              <h1>{ hours } timer</h1>
              <h1>{ minutes } minutter</h1>
              <h1>{ seconds } sekunder</h1>
            </div>

          </BoxBody>
        </Box>
      </Col>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(PreProjectCountdown);
