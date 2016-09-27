import React, { Component } from 'react';

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
        placeholder={this.props.placeholder || 'Your text here ...'}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

TextInput.propTypes = {
  onSubmit: React.PropTypes.func,
  placeholder: React.PropTypes.string
};

export default TextInput;
