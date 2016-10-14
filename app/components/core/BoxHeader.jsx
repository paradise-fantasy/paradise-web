import React, { Component, PropTypes } from 'react';

class Box extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: 'Title'
  }

  render() {
    return (
      <div className="box-header">
        <h3 className="box-title">{this.props.title}</h3>
      </div>
    );
  }
}

export default Box;
