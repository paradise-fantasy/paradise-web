import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import ReactHighchart from 'react-highcharts';
import { Box, BoxHeader, BoxBody, BoxFooter } from './core';


const commonConfig = {
  chart: {
    type: 'spline'
  },
  xAxis: {
    type: 'datetime',
    tickPixelInterval: 150
  },
  series: [{
    name: 'SensorTag',
    data: [],
    type: 'spline'
  }, {
    name: '1-Wire',
    data: [],
    type: 'spline'
  }
]
};


class TemperatureChart extends Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.config = {
      ...commonConfig,
      title: null,
      yAxis: {
        title: null,
        plotLines: [{
          value: 0,
          width: 1,
          color: '#000066'
        }],
        min: 15,
        max: 27
      }
    };

    this.state = {
      oneWireData: [],
      sensorTagData: []
    };
  }

  componentDidUpdate() {
    const data = this.props.data;

    let lastData;
    if (data._value.sensor === 'SensorTag') {
      lastData = this.state.sensorTagData.slice(-1)[0];
    } else {
      lastData = this.state.oneWireData.slice(-1)[0];
    }

    if (
      lastData === undefined ||
      data._arrivedAt.valueOf() !== lastData.x
    ) {
      this.updateData(data);
    }
  }

  updateData(data) {
    const chart = this.chart.getChart();

    let chartData;
    let chartSeries;

    if (data._value.sensor === 'SensorTag') {
      chartData = this.state.sensorTagData.slice(0);
      chartSeries = chart.series[0];
    } else {
      chartData = this.state.oneWireData.slice(0);
      chartSeries = chart.series[1];
    }

    const dataPoint = {
      x: data._arrivedAt.valueOf(),
      y: parseFloat(data._value.temperature)
    };

    if (chartData.length < 10) {
      chartData.push(dataPoint);
      chartSeries.setData(chartData);
    } else {
      chartData = chartData.slice(1);
      chartData.push(dataPoint);
      chartSeries.addPoint([dataPoint.x, dataPoint.y], true, true);
    }

    if (data._value.sensor === 'SensorTag') {
      this.setState({ sensorTagData: chartData });
    } else {
      this.setState({ oneWireData: chartData });
    }
  }

  render() {
    const { md, sm, xs } = this.props;
    return (
      <Col md={md} sm={sm} xs={xs}>
        <Box color="aqua">
          <BoxHeader title="Temperatur" />
          <BoxBody>
            <ReactHighchart
              config={this.config}
              ref={c => { this.chart = c; }}
              isPureConfig
            />
          </BoxBody>
          <BoxFooter />
        </Box>
      </Col>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.api.temperature };
};

export default connect(mapStateToProps)(TemperatureChart);
