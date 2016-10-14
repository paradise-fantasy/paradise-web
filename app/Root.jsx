import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import NumberInput from './components/NumberInput.jsx';
import ColumnChart from './components/ColumnChart.jsx';
import { firedux } from './redux-logic/firedux';

class App extends Component {
  static propTypes = {
    users: React.PropTypes.array
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <ColumnChart data={users} seriesName={'Tid'} />
        {
          users.map(user =>
            <NumberInput
              key={user.category}
              startValue={user.value}
              onChange={(number) => firedux.set(`users/${user.category}`, number)}
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
const mapStateToProps = (state) => {
  const dataObject = state.firedux.data.users;
  const users = map(dataObject, (value, name) => ({
    category: name,
    value
  }));
  return { users };
};

export default connect(mapStateToProps)(App);
