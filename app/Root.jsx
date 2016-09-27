import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addListElement, removeListElement } from './redux-logic/actions';

class TextInput extends Component {
  constructor() {
    super();
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onSubmit(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <input
        value={this.state.value}
        placeholder="Your text here m8"
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

TextInput.propTypes = {
  onSubmit: React.PropTypes.func
};

const App = ({ dispatch, listItems }) => (
  <div>
    <h1>Press enter to add to list</h1>
    <ul className="items">
      {
        listItems.map(
          item =>
            <li key={item.id}>
              {item.text}
              <button onClick={() => dispatch(removeListElement(item.id))}>x</button>
            </li>
        )
      }
    </ul>
    <TextInput onSubmit={(text) => dispatch(addListElement(text))} />
  </div>
);

App.propTypes = {
  dispatch: React.PropTypes.func,
  listItems: React.PropTypes.array
};

/**
 * mapStateToProps injects App with properties derived
 * from the global redux state.
 *
 * In this example, we will inject a 'listItems' property
 * from the 'list' field in our redux state.
 */
const mapStateToProps = state => ({
  listItems: state.list
});

export default connect(mapStateToProps)(App);
