import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';
import { VotingContainer } from './components/voting';
import { ResultsContainer } from './components/results';

if (module.hot) { module.hot.accept(); }

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: { Sunshine: 2 }
    }
  }
});

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={VotingContainer} />
      <Route path="results" component={ResultsContainer} />
    </Route>
  </Router>
);

ReactDom.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('app')
);
