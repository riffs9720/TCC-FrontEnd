import React from 'react';

import { TextField } from '@material-ui/core';

import './Login.css';

const Login = () => (
  <>
    <div className="planoFundo">
      <div className="col1">
        <div />
      </div>
      <div className="col2">
        <div />
        <div className="container">
          <div className="colEsq" />
          <div className="colDir">
            <div>
              Botão de voltar
            </div>
            <div className="titulo">
              <div />
              <h2>
                MedTCC
              </h2>
              <div />
            </div>
            <form className="Form-Login">
              <div className="text">
                <div />
                <div>
                  <TextField
                    id="standard-full-width"
                    label="Email"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="standard-full-width"
                    label="Senha"
                    type="password"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <div className="teste">
                    <div />
                    <div>
                      <a href="http://">Esqueceu sua senha?</a>
                    </div>
                  </div>
                </div>
                <div />
              </div>
              <div className="botao">
                <div />
                <button className="Login-Btn" type="submit">Login</button>
                <div />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="col3">
      <div />
    </div>
  </>
);

export default Login;
