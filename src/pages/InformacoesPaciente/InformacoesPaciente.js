/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Table from 'react-bootstrap/Table';
import { FaChevronCircleLeft } from 'react-icons/fa';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import './InformacoesPaciente.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function InformacoesPaciente() {
  const classes = useStyles();
  return (
    <>
      <div className="container-kamban">
        <div className="cabecalho">
          <div className="nomeSistema">
            <h5>MedTCC</h5>
          </div>
          <div className="nomeMedico">
            <h2>Resultado da Pesquisa</h2>
          </div>
          <div className="searchAccount">
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item className="search">
                  <TextField
                    placeholder="Buscar"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      className: 'search',
                    }}
                  />
                </Grid>
                <Grid item>
                  <SearchIcon />
                </Grid>
              </Grid>
            </div>
            <div>
              <div className="iconeAccount" />
            </div>
          </div>
        </div>
        <div className="corpo">
          <div className="corpo-col1">
            <div>
              <a href="/HomeMedico"><FaChevronCircleLeft className="Icon-Return" /></a>
            </div>
            <div className="infoPaciente">
              <div className="infoPaciente-col1">
                <div className="info-nomePaciente">
                  <label>Nome Paciente</label>
                  <div className="FontSize">Lama Whitfield</div>
                </div>
                <div className="info-Consulta">
                  <label>Consulta</label>
                  <div className="FontSize">Segunda Consulta</div>
                </div>
                <div className="info-Remedios">
                  <label>Remédios</label>
                  <ul>
                    <li>Bla</li>
                    <li>Bla</li>
                    <li>Bla</li>
                  </ul>
                </div>
              </div>
              <div className="infoPaciente-col2">
                <div className="info-DtNascimento">
                  <label>Data de Nascimento</label>
                  <div className="FontSize">12/11/1997</div>
                </div>
                <div className="info-Diagnostico">
                  <label>Diagnostico</label>
                  <div className="FontSize">Sem Diagnostico</div>
                </div>
              </div>
            </div>
          </div>
          <div className="linha-vertical" />
          <div className="historicoPaciente">
            <div className="teste">
              <h4>Histórico do Paciente</h4>
            </div>
            <div className="tabela">
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                  <tr>
                    <td>Larry the Bird</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
