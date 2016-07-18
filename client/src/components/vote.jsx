import React from 'react';

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },

  isDisabled: function() {
    return !!this.props.hasVoted;
  },

  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry;
  },

  bindVoteCallback: function(entry) {
    return () => this.props.vote(entry)
  },

  votedForTag: function(entry) {
    return this.hasVotedFor(entry) ?
      <div className="label">Voted</div> :
      null;
  },

  render: function() {
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
});
