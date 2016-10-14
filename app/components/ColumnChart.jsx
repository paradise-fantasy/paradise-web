import React, { Component, PropTypes } from 'react';
import ReactHighcharts from 'react-highcharts';

const commonConfig = {
  chart: {
    type: 'column'
  },
  xAxis: {}
};

class Chart extends Component {
  static propTypes = {
    seriesName: PropTypes.string.isRequired,
    data: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.config = {
      ...commonConfig,
      series: [{
        name: props.seriesName,
        value: []
      }]
    };
  }

  componentDidMount() {
    const { data } = this.props;
    if (data) this.updateData(data);
  }

  componentDidUpdate() {
    const { data } = this.props;
    if (data) this.updateData(data);
  }

  updateData(data) {
    const chart = this.chart.getChart();
    const categories = data.map(entry => entry.category);
    const values = data.map(entry => entry.value);
    chart.xAxis[0].setCategories(categories);
    chart.series[0].setData(values);
  }

  render() {
    return (
      <ReactHighcharts
        config={this.config}
        ref={c => { this.chart = c; }}
        isPureConfig
      />
    );
  }
}

export default Chart;
