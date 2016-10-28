import React, { Component } from 'react';

class Marquee extends Component {
  componentDidMount() {
    this.marquee.setAttribute('scrollamount', 3, 0);
  }

  render() {
    return (
      <marquee direction="left" ref={m => { this.marquee = m; }}>
        { this.props.children }
      </marquee>
    )
  }
}

export default Marquee;
