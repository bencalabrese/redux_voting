import React from 'react';
import ReactDom from 'react-dom';
import Voting from './components/voting';

const pair = ['Trainspotting', '28 Days Later'];

if (module.hot) { module.hot.accept(); }

ReactDom.render(
  <Voting pair={pair} hasVoted="Trainspotting"/>,
  document.getElementById('app')
);
