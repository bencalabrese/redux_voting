import React from 'react';
import { connect } from 'react-redux';
import Vote from './vote';
import Winner from './winner';
import PureComponent from '../util/pure_component';

export class Voting extends PureComponent {
  render() {
    const child = this.props.winner ?
      <Winner ref="winner" winner={this.props.winner} /> :
      <Vote {...this.props} />;

    return <div>{child}</div>
  }
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps)(Voting);
