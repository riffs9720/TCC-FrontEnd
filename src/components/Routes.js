import React from 'react';
import { Router, Switch, Route } from 'react-router';

import { history } from '../history';
import DashboardMedico from '../pages/DashboardMedico/DashboardMedico';
import Home from '../pages/Home/Home';
import InformacoesPaciente from '../pages/InformacoesPaciente/InformacoesPaciente';
import Kamban from '../pages/Kamban/Kamban';
import Login from '../pages/Login/Login';


const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={Login} exact path="/Login" />
      <Route component={Home} exact path="/" />
      <Route component={Kamban} exact path="/Kamban" />
      <Route component={InformacoesPaciente} exact path="/InformacoesPaciente" />
      <Route component={DashboardMedico} exact path="/DashboardMedico" />
    </Switch>
  </Router>
);

export default Routes;
