import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Box extends Component {
  static propTypes = {
    color: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }

  render() {
    const { color } = this.props;

    const className = classNames(
      'box',
      color ? `color-${color}` : ''
    );

    if (this.props.children) return <div className={className}>{this.props.children}</div>;
    return <div className={className} />;
  }
}

export default Box;
