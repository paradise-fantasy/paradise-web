import React, { Component } from 'react';
import { connect } from 'react-redux';
import NumberInput from './components/NumberInput.jsx';
import Chart from './components/Chart.jsx';
import { changeData } from './redux-logic/actions';

const config = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Kontor'
  },
  xAxis: {
    categories: ['Frederik', 'Raymi', 'Kabbe']
  },
  yAxis: {
    title: {
      text: 'Fruit eaten'
    }
  },
  series: [{
    name: 'Tid',
    value: [0, 0, 0]
  }]
};

class App extends Component {
  static propTypes = {
    data: React.PropTypes.array,
    dispatch: React.PropTypes.func
  }

  render() {
    const { data, dispatch } = this.props;
    return (
      <div>
        <Chart config={config} data={[data.map(entry => entry.value)]} />
        {
          data.map(entry =>
            <NumberInput
              key={entry.name}
              onChange={(number) => dispatch(changeData(entry.name, number))}
            />
          )
        }
      </div>
    );
  }
}


/**
 * mapStateToProps injects App with properties derived
 * from the global redux state.
 *
 * In this example, we will inject a 'listItems' property
 * from the 'list' field in our redux state.
 */
const mapStateToProps = (state) => ({ data: state.data });

export default connect(mapStateToProps)(App);
