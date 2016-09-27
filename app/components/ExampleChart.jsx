import React from 'react';
import Chart from './Chart';

const initialConfig = (dyanmicData) => ({
  chart: {
    type: 'line'
  },
  title: false,
  series: [{
    name: 'static',
    data: [4, 5, 6, 2, 4]
  }, {
    name: 'dynamic',
    data: dyanmicData
  }]
});

const ExampleChart = (props) => (
  <Chart config={initialConfig(props.data)} />
);

ExampleChart.propTypes = {
  data: React.PropTypes.array
};

export default ExampleChart;
