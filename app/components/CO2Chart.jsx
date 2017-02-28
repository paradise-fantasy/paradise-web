import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import ReactHighchart from 'react-highcharts';
import { Box, BoxHeader, BoxBody, BoxFooter } from './core';

const round = (value, decimals) => Number(Math.round(value+'e'+decimals)+'e-'+decimals); // eslint-disable-line

/** SETS THE MAXIMUM AMOUNT OF DATA POINTS **/
const MAX_DATA_POINTS = 288;
const MAX_BUFFER_POINTS = 60;

const COLORS = [
  '#f39c12', // yellow
  '#00a65a', // green
  '#00c0ef', // aqua
  '#dd4b39', // red
  '#3c8dbc' // blue
];

ReactHighchart.Highcharts.setOptions({
  global: {
    useUTC: false
  }
});

const chartConfig = {
  chart: {
    type: 'spline',
    height: 300
  },
  legend: {
    enabled: false
  },
  title: null,
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    title: null,
    plotLines: [{
      value: 0,
      width: 1,
      color: '#000066'
    }],
    min: 100,
    max: 2000
  },
  series: [{
    type: 'spline',
    name: 'CO2',
    data: [],
    color: COLORS[3],
    marker: { enabled: false }
  }],
  credits: false
};

const meanValue = (values) => {
  const sum = values.reduce((a, b) => a + b);
  return Math.floor(sum / values.length);
};

class CO2Chart extends Component {
  constructor() {
    super();

    this.state = {
      numDataPoints: 0,
      buffer: []
    };
  }

  componentDidUpdate() {
    const { _arrivedAt, _value } = this.props.data;

    const { numDataPoints, buffer } = this.state;

    buffer.push({ _arrivedAt, _value });
    if (numDataPoints === 0 || buffer.length >= MAX_BUFFER_POINTS) {
      const bufferMean = meanValue(buffer.map(x => x._value));
      this.state.buffer = [];

      const doShift = numDataPoints >= MAX_DATA_POINTS;
      this.state.numDataPoints = numDataPoints + (doShift ? 0 : 1);

      const chart = this.chart.getChart();
      const timestamp = _arrivedAt.valueOf();
      chart.series[0].addPoint({ x: timestamp, y: bufferMean }, false, doShift);
      chart.redraw();
    }
  }

  render() {
    const { md, sm, xs } = this.props;

    return (
      <Col md={md} sm={sm} xs={xs}>
        <Box color="aqua">
          <BoxHeader title="CO2-Nivå" />
          <BoxBody className="temperature-body">
            <ReactHighchart
              config={chartConfig}
              ref={c => { this.chart = c; }}
              isPureConfig
            />
            <div className="current-temperatures">
              <div className="sensor" style={{ background: COLORS[3] }}>
                <span className="temperature">
                  { this.props.data ? this.props.data._value : null }
                </span>
                <span className="name">CO2</span>
              </div>
            </div>
          </BoxBody>
          <BoxFooter />
        </Box>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({ data: state.api.co2 });

export default connect(mapStateToProps)(CO2Chart);
