import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import ReactHighchart from 'react-highcharts';
import { isEmpty } from 'lodash';
import { Box, BoxHeader, BoxBody, BoxFooter } from './core';

const round = (value, decimals) => Number(Math.round(value+'e'+decimals)+'e-'+decimals); // eslint-disable-line

/** SETS THE MAXIMUM AMOUNT OF DATA POINTS **/
const MAX_DATA_POINTS = 20;
const REFRESH_RATE = 5000; // Every 3 seconds

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
    height: 200
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
    min: -10,
    max: 27
  },
  series: [],
  credits: false
};

// {
//   name: 'SensorTag',
//   data: [],
//   type: 'spline'
// }

class TemperatureChart extends Component {
  constructor() {
    super();
    this.addSensor = this.addSensor.bind(this);
    this.addData = this.addData.bind(this);

    this.state = {
      queue: []
    };
  }

  componentDidMount() {
    setInterval(() => {
      const chart = this.chart.getChart();
      const points = this.state.queue;
      points.forEach(point => {
        const { seriesIndex, data, doShift } = point;
        chart.series[seriesIndex]
          .addPoint({ x: data.timestamp, y: data.temperature }, false, doShift);
      });
      chart.redraw();
      this.setState({ queue: [] });
    }, REFRESH_RATE);
  }

  componentDidUpdate() {
    if (!this.props.data || isEmpty(this.props.data)) return;
    const { _arrivedAt, _value: { sensor, temperature } } = this.props.data;
    const data = {
      timestamp: _arrivedAt.valueOf(),
      temperature
    };

    if (!this.state[sensor]) {
      this.addSensor(sensor, data);
    } else {
      this.addData(sensor, data);
    }
  }

  addSensor(sensor, data) {
    const chart = this.chart.getChart();
    const seriesIndex = chart.series.length;

    chart.addSeries({
      type: 'spline',
      name: sensor,
      data: [{ x: data.timestamp, y: data.temperature }],
      color: COLORS[seriesIndex]
    });

    this.setState({
      [sensor]: {
        seriesIndex,
        data: [data],
      }
    });
  }

  addData(sensor, data) {
    const { seriesIndex, data: currentData } = this.state[sensor];

    // Check if the update is "real"
    if (currentData.slice(-1)[0].timestamp === data.timestamp) return;

    const doShift = currentData.length >= MAX_DATA_POINTS;

    const nextData = currentData.slice(doShift ? 1 : 0);
    nextData.push(data);

    const newQueue = this.state.queue.slice(0);
    newQueue.push({ seriesIndex, data, doShift });

    this.setState({
      queue: newQueue,
      [sensor]: {
        seriesIndex,
        data: nextData
      }
    });
  }

  render() {
    const { md, sm, xs } = this.props;
    const sensors = Object.keys(this.state).filter(x => x !== 'queue'); // Ehhheh..

    return (
      <Col md={md} sm={sm} xs={xs}>
        <Box color="aqua">
          <BoxHeader title="Temperatur" />
          <BoxBody className="temperature-body">
            <ReactHighchart
              config={chartConfig}
              ref={c => { this.chart = c; }}
              isPureConfig
            />
            <div className="current-temperatures">
              {
                sensors.map(sensor =>
                  <div
                    key={sensor}
                    className="sensor"
                    style={{ background: COLORS[this.state[sensor].seriesIndex] }}
                  >
                    <span className="temperature">
                      {round(this.state[sensor].data.slice(-1)[0].temperature, 1)}°
                    </span>
                    <span className="name">
                      {sensor}
                    </span>
                  </div>
                )
              }
            </div>
          </BoxBody>
          <BoxFooter />
        </Box>
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({ data: state.api.temperature });

export default connect(mapStateToProps)(TemperatureChart);
