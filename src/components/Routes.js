import React from 'react';

import { Router, Switch, Route } from 'react-router';

import Login from '../pages/Login/Login';

import { history } from '../history';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={Login} exact path="/Login" />
    </Switch>
  </Router>
);

export default Routes;
