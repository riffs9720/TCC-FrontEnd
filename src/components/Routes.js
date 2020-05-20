import React from 'react';

import { Router, Switch, Route } from 'react-router';

import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import HomeAdm from '../pages/HomeAdm/HomeAdm';
import CadastroUsuario from '../pages/CadastroUsuario/CadastroUsuario';
import HomeMedico from '../pages/HomeMedico/HomeMedico';
import HomePaciente from '../pages/HomePaciente/HomePaciente';

import { history } from '../history';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={Login} exact path="/Login" />
      <Route component={Home} exact path="/" />
      <Route component={HomeAdm} exact path="/HomeAdm" />
      <Route component={CadastroUsuario} exact path="/CadastroUsuario" />
      <Route component={HomeMedico} exact path="/HomeMedico" />
      <Route component={HomePaciente} exact path="/HomePaciente" />
      <Route exact path="/" component={() => <h1>Login</h1>} />
      <Route path="/signup" component={() => <h1>SignUp</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </Router>
);

export default Routes;
