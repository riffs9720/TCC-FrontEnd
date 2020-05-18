import React from 'react';

import { Button } from '@material-ui/core';
import './Home.css';

const Home = () => (
  <div className="BackGroud-Image">
    <div className="Nav-Home">
      <p className="titulo">MedTCC</p>
      <div className="col-options">
        <p>Home</p>
        <p>Quem somos</p>
        <p>
          <a href="Login">
            <Button className="Btn-Login">Login</Button>
          </a>
        </p>
      </div>
    </div>
    <div className="Col-Desc">
      <div />
      <div className="Texto">
        Aqui está uma plataforma para você já ter tudo que precisa para melhor
        atender as pessoas
      </div>
    </div>
  </div>
);

export default Home;
