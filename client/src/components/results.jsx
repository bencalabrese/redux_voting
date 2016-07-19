import React from 'react';
import PureComponent from '../util/pure_component';
import { connect } from 'react-redux';
import Winner from './winner';

export class Results extends PureComponent {
  getPair() {
    return this.props.pair || [];
  }

  getVotes(entry) {
    let tally = this.props.tally;

    return tally && tally.has(entry) ? tally.get(entry) : 0;
  }

  render() {
    if (this.props.winner) {
      return <Winner ref="winner" winner={this.props.winner} />
    }

    const entries = this.getPair().map(entry =>
      <div key={entry} className="entry">
        <h1>{entry}</h1>
        <div className="voteCount">{this.getVotes(entry)}</div>
      </div>
    );

    return (
      <div>
        {entries}

        <div className="management">
          <button ref="next"
                  className="next"
                  onClick={this.props.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  };
}

export const ResultsContainer = connect(mapStateToProps)(Results);
