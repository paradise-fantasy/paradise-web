import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

class Chart extends Component {
  componentDidMount() {
    const chart = this.chart.getChart();
    const series = this.props.config.series || [];
    console.log(series);
  }
  componentDidUpdate() {
    const chart = this.chart.getChart();
    const series = this.props.config.series || [];
    console.log(series);
  }

  render() {
    return (
      <ReactHighcharts config={this.props.config} ref={c => { this.chart = c; }} />
    );
  }
}

Chart.propTypes = {
  config: React.PropTypes.object,
};

export default Chart;
