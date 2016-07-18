import React from 'react';
import PureComponent from '../util/pure_component';

export default class Winner extends PureComponent {
  render() {
    return <div className="winner">Winner is {this.props.winner}!</div>
  }
};
