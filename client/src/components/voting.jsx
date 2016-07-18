import React from 'react';
import Vote from './vote';
import Winner from './winner';

export default React.createClass({
  render: function() {
    const child = this.props.winner ?
      <Winner ref="winner" winner={this.props.winner} /> :
      <Vote {...this.props} />;

    return <div>{child}</div>
  }
});
