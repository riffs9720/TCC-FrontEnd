import React from 'react';
import { Router, Switch, Route } from 'react-router';

import { history } from '../history';
import DashboardMedico from '../pages/DashboardMedico/DashboardMedico';
import Home from '../pages/Home/Home';
import InformacoesPaciente from '../pages/InformacoesPaciente/InformacoesPaciente';
import Kamban from '../pages/Kamban/Kamban';
import Login from '../pages/Login/Login';
import HomeAdm from '../pages/HomeAdm/HomeAdm';
import CadastroUsuario from '../pages/CadastroUsuario/CadastroUsuario';
import HomeMedico from '../pages/HomeMedico/HomeMedico';
import HomePaciente from '../pages/HomePaciente/HomePaciente';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={Login} exact path="/Login" />
      <Route component={Home} exact path="/" />
      <Route component={Kamban} exact path="/Kamban" />
      <Route component={InformacoesPaciente} exact path="/InformacoesPaciente" />
      <Route component={DashboardMedico} exact path="/DashboardMedico" />
      <Route component={HomeAdm} exact path="/HomeAdm" />
      <Route component={CadastroUsuario} exact path="/CadastroUsuario" />
      <Route component={HomeMedico} exact path="/HomeMedico" />
      <Route component={HomePaciente} exact path="/HomePaciente" />
    </Switch>
  </Router>
);

export default Routes;
