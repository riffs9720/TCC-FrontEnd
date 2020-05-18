import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import 'bootstrap/dist/css/bootstrap.min.css';

import './HomeAdm.css';
import CadastroUsuario from '../CadastroUsuario/CadastroUsuario';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function HomeAdm() {
  const classes = useStyles();
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
        <div className="Article">
          <table className="TabelaUsuarios">
            <tr className="TabelaColunas">
              <th>Nome do usuário</th>
              <th>Cargo</th>
              <th>Unidade</th>
              <th>Ordenar por usuário</th>
            </tr>
            <tr className="TabelaColunas">
              <td>Holly Deleon</td>
              <td>Cargo Lorem Ipsum Dolor</td>
              <td>Undade Lorem Ipsum Dolor</td>
              <td>ordenado ...</td>
            </tr>
            <tr className="TabelaColunas">
              <td>Veronica Leon</td>
              <td>Cargo Lorem Ipsum Dolor</td>
              <td>Undade Lorem Ipsum Dolor</td>
              <td>ordenado ...</td>
            </tr>
            <tr className="TabelaColunas">
              <td>Celeste Clemons</td>
              <td>Cargo Lorem Ipsum Dolor</td>
              <td>Undade Lorem Ipsum Dolor</td>
              <td>ordenado ...</td>
            </tr>
            <tr className="TabelaColunas">
              <td>Jay-Jay Mora</td>
              <td>Cargo Lorem Ipsum Dolor</td>
              <td>Undade Lorem Ipsum Dolor</td>
              <td>ordenado ...</td>
            </tr>
            <tr className="TabelaColunas">
              <td>Kelsie Charpe</td>
              <td>Cargo Lorem Ipsum Dolor</td>
              <td>Undade Lorem Ipsum Dolor</td>
              <td>ordenado ...</td>
            </tr>
            <tr className="TabelaColunas">
              <td>Gleen White</td>
              <td>Cargo Lorem Ipsum Dolor</td>
              <td>Undade Lorem Ipsum Dolor</td>
              <td>ordenado ...</td>
            </tr>
            <tr className="TabelaColunas">
              <td>Oliver Heaton</td>
              <td>Cargo Lorem Ipsum Dolor</td>
              <td>Undade Lorem Ipsum Dolor</td>
              <td>ordenado ...</td>
            </tr>
            <tr className="TabelaColunas">
              <td>Tamar Firth</td>
              <td>Cargo Lorem Ipsum Dolor</td>
              <td>Undade Lorem Ipsum Dolor</td>
              <td>ordenado ...</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="Footer">
        <div className={classes.root}>
          <Pagination count={3} color="#34495E" />
        </div>
      </div>
    </div>
  );
}
