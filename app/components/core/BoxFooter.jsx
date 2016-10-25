import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class BoxFooter extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const className = classNames(this.props.className, 'box-footer');

    if (this.props.children) return <div className={className}>{this.props.children}</div>;
    return <div className={className} />;
  }
}

export default BoxFooter;
