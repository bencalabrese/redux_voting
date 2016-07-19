import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import io from 'socket.io-client';
import { setState } from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import App from './components/app';
import { VotingContainer } from './components/voting';
import { ResultsContainer } from './components/results';

if (module.hot) { module.hot.accept(); }

const socket = io(`${location.protocol}//${location.hostname}:8090`);
const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

socket.on('state', state => store.dispatch(setState(state)) );

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
