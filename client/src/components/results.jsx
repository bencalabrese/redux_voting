import React from 'react';
import PureComponent from '../util/pure_component';
import Winner from './winner';

export default class Results extends PureComponent {
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
