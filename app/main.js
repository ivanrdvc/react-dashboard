import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Content from './components/Content/Content';
import Featured from './components/Content/Featured';
import Dashboard from './components/Content/Dashboard';
import Settings from './components/Content/Settings';
import Message from './components/Content/Message';
import UIElements from './components/Content/UIElements';
import Support from './components/Content/Support';
import Login from './components/Login/Login';

const router = (
  <Router history={browserHistory}>
    <Route component={App}>
      <IndexRoute component={Content} />
        <Route path="/" component={Content}>
          <IndexRoute component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/featured" component={Featured} />
          <Route path="/message" component={Message} />
          <Route path="/uielements" component={UIElements} />
          <Route path="/support" component={Support} />
          <Route path="/settings" component={Settings} />
        </Route>
    </Route>
    <Route path="/login" component={Login} />
  </Router>
);

ReactDOM.render(
 router,
  document.querySelector('.root')
);