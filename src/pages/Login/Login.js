import React from 'react';

import { TextField } from '@material-ui/core';

import { FaChevronCircleLeft } from 'react-icons/fa';

import './Login.css';

/* function initialSate(){
  return {user: '', password: ''};
} */

const Login = () => (
  <>
    <div className="BackGround">
      <div className="Col1">
        <div />
      </div>
      <div className="Col2">
        <div />
        <div className="Container">
          <div className="Col-Left" />
          <div className="Col-Right">
            <div>
              <a href="/"><FaChevronCircleLeft className="Icon-Return" /></a>
            </div>
            <div className="Form-Title">
              <div />
              <h3>
                MedTCC
              </h3>
              <div />
            </div>
            <form className="Form-Login">
              <div className="Form-Inputs">
                <div />
                <div>
                  <TextField
                    id="standard-full-width"
                    label="Email"
                    placeholder="exemple@exemple.com"
                    fullWidth
                    margin="normal"
                    onChange="onChange"
                    InputLabelProps={{
                      shrink: true,
                      className: 'Form-Label',
                    }}
                  />
                  <TextField
                    id="standard-full-width"
                    label="Senha"
                    type="password"
                    placeholder="●●●●●●●●●●"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                      className: 'Form-Label',
                    }}
                  />
                  <div className="Form-Reset">
                    <div />
                    <div>
                      <a href="Esqueceu">Esqueceu sua senha?</a>
                    </div>
                  </div>
                </div>
                <div />
              </div>
              <div className="Form-Button">
                <div />
                <button className="Login-Btn" type="submit">Login</button>
                <div />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="Col3">
      <div />
    </div>
  </>
);

export default Login;
