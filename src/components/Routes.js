import React from 'react';
import { Router, Switch, Route } from 'react-router';

import { history } from '../history';
import CadastroUsuario from '../pages/Administrador/CadastroUsuario/CadastroUsuario';
import HomeAdm from '../pages/Administrador/HomeAdm/HomeAdm';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import HomeMedico from '../pages/Medico/HomeMedico/HomeMedico';
import InformacoesPaciente from '../pages/Medico/InformacoesPaciente/InformacoesPaciente';
import Kamban from '../pages/Medico/Kamban/Kamban';
import HomePaciente from '../pages/Paciente/HomePaciente/HomePaciente';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={Login} exact path="/Login" />
      <Route component={Home} exact path="/" />
      <Route component={Kamban} exact path="/Kamban" />
      <Route component={InformacoesPaciente} exact path="/InformacoesPaciente" />
      <Route component={HomeAdm} exact path="/HomeAdm" />
      <Route component={CadastroUsuario} exact path="/CadastroUsuario" />
      <Route component={HomeMedico} exact path="/HomeMedico" />
      <Route component={HomePaciente} exact path="/HomePaciente" />
    </Switch>
  </Router>
);

export default Routes;
