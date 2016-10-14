import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class BoxBody extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }

  static defaultProps = {
    title: 'Title'
  }

  render() {
    const className = classNames('box-body');

    if (this.props.children) return <div className={className}>{this.props.children}</div>;
    return <div className={className} />;
  }
}

export default BoxBody;
