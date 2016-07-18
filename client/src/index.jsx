import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import Voting from './components/voting';
import Results from './components/results';

if (module.hot) { module.hot.accept(); }

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Voting} />
    <Route path="results" component={Results} />
  </Route>
);

ReactDom.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('app')
);
