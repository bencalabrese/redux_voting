import React from 'react';
import PureComponent from '../util/pure_component';

export default class Vote extends PureComponent {
  getPair() {
    return this.props.pair || [];
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  bindVoteCallback(entry) {
    return () => this.props.vote(entry)
  }

  votedForTag(entry) {
    return this.hasVotedFor(entry) ?
      <div className="label">Voted</div> :
      null;
  }

  render() {
    const buttons = this.getPair().map(entry => {
      return (
        <button key={entry}
                onClick={this.bindVoteCallback(entry)}
                disabled={this.isDisabled()}>

          <h1>{entry}</h1>

          {this.votedForTag(entry)}
        </button>
      );
    });

    return <div className="voting">{buttons}</div>
  }
};
