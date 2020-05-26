import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './HomeAdm.css';
import CadastroUsuario from '../CadastroUsuario/CadastroUsuario';
import Tabela from './Tabela';


export default function HomeAdm() {
  return (
    <div>
      <div className="CabeçalhoHomeAdmin">
        <div className="NomeSistemaHomeAdmin">
          <h3>MedTCC</h3>
        </div>
        <div className="NomeTelaHomeAdmin">
          <h2>Bem vindo Administrador</h2>
        </div>
        <div className="BotaoEIcone">
          <div>
            <CadastroUsuario />
          </div>
          <div className="iconeAdm" />
        </div>
      </div>
      <div className="Tabela">
        <Tabela />
      </div>
      <div className="Footer" />
    </div>
  );
}
