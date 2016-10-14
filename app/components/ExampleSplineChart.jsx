import React, { Component, PropTypes } from 'react';
import ReactHighchart from 'react-highcharts';

const config = {
  chart: {
    type: 'spline'
  },
  xAxis: {
    type: 'datetime',
    tickPixelInterval: 150
  },
  yAxis: {
    title: {
      text: 'Value'
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  },
  legend: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: 'Random data',
    data: (() => {
        // generate an array of random data
      const data = [];
      const time = (new Date()).getTime();
      let i;
      for (i = -19; i <= 0; i += 1) {
        data.push({
          x: time + (i * 1000),
          y: Math.random()
        });
      }
      return data;
    })()
  }],
  credits: false
};

class Chart extends Component {
  componentDidMount() {
    const chart = this.chart.getChart();
    const series = chart.series[0];
    setInterval(() => {
      const x = (new Date()).getTime();
      const y = Math.random();
      series.addPoint([x, y], true, true);
    }, 1000);
  }

  render() {
    return (
      <ReactHighchart
        ref={c => { this.chart = c; }}
        config={config}
        isPureConfig
      />
    );
  }
}

export default Chart;
