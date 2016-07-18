import React from 'react';
import Vote from './vote';
import Winner from './winner';
import PureComponent from '../util/pure_component';

export default class Voting extends PureComponent {
  render() {
    const child = this.props.winner ?
      <Winner ref="winner" winner={this.props.winner} /> :
      <Vote {...this.props} />;

    return <div>{child}</div>
  }
};
