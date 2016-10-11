import React, { Component } from 'react';

class NumberInput extends Component {
  static propTypes = {
    onChange: React.PropTypes.func
  }

  constructor() {
    super();
    this.state = { number: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const number = parseInt(event.target.value, 10);
    this.setState({ number });
    if (this.props.onChange) {
      this.props.onChange(number);
    }
  }

  render() {
    return <input type="number" value={this.state.number} onChange={this.handleChange} />;
  }
}

export default NumberInput;
