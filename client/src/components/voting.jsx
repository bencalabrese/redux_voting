import React from 'react';
import { connect } from 'react-redux';
import Vote from './vote';
import Winner from './winner';
import PureComponent from '../util/pure_component';
import * as actionCreators from '../action_creators';

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
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
)(Voting);
