import React, { Component, PropTypes } from 'react';
import ReactHighcharts from 'react-highcharts';

class Chart extends Component {
  static propTypes = {
    data: PropTypes.array,
    config: PropTypes.object
  }
  constructor() {
    super();
    this.updateData = this.updateData.bind(this);
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
    data.forEach((serieData, index) => { chart.series[index].setData(serieData); });
  }

  render() {
    return (
      <ReactHighcharts
        config={this.props.config}
        ref={c => { this.chart = c; }}
        isPureConfig
      />
    );
  }
}

export default Chart;
