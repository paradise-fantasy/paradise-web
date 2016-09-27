import React from 'react';
import { connect } from 'react-redux';

import { setChartData } from './redux-logic/actions';
import TextInput from './components/TextInput';
import ExampleChart from './components/ExampleChart';

const App = ({ dispatch, chartData }) => (
  <div>
    <h1>Dynamic Chart</h1>
    <ExampleChart data={chartData} />
    <TextInput
      placeholder="Enter data, e.g. [6, 4, 2, 3, 5]"
      onSubmit={(text) => dispatch(setChartData(text))}
    />
  </div>
);

App.propTypes = {
  dispatch: React.PropTypes.func,
  chartData: React.PropTypes.array
};

const mapStateToProps = state => ({
  chartData: state.chartData
});

export default connect(mapStateToProps)(App);
