import React, { useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import

import { TextField } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import 'react-confirm-alert/src/react-confirm-alert.css';


import { api } from '../../../config/api';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#34495E',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    color: '#34495E',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  paper: {
    position: 'absolute',
    width: 900,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Tabela() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [medicos, setMedicos] = React.useState([]);
  const [nomeMedico, setNomeMedico] = React.useState({});
  const [rgMedico, setRgMedico] = React.useState({});
  const [cpfMedico, setCpfMedico] = React.useState({});
  const [crm, setCrm] = React.useState({});
  const [especialidade, setEspecialidade] = React.useState({});
  const [enderecoMedico, setEnderecoMedico] = React.useState({});
  const [cepMedico, setCepMedico] = React.useState({});
  const [numeroMedico, setNumeroMedico] = React.useState({});
  const [bairroMedico, setBairroMedico] = React.useState({});
  const [cidadeMedico, setCidadeMedico] = React.useState({});
  const [emailMedico, setEmailMedico] = React.useState({});
  const [dtNascimentoMedico, setDtNascimentoMedico] = React.useState(null);
  const [senhaMedico, setSenhaMedico] = React.useState(null);
  const [idMedico, setIdMedico] = React.useState({});

  async function alterarBanco() {
    if (senhaMedico !== null && dtNascimentoMedico === null) {
      await api.put(`/Medico/${idMedico}`, {
        nomeMedico,
        rgMedico,
        cpfMedico,
        crm,
        especialidade,
        enderecoMedico,
        cepMedico,
        numeroMedico,
        bairroMedico,
        cidadeMedico,
        emailMedico,
        senhaMedico,
      });
    } else if (senhaMedico === null && dtNascimentoMedico !== null) {
      await api.put(`/Medico/${idMedico}`, {
        nomeMedico,
        rgMedico,
        cpfMedico,
        crm,
        especialidade,
        enderecoMedico,
        cepMedico,
        numeroMedico,
        bairroMedico,
        cidadeMedico,
        emailMedico,
        dtNascimentoMedico,
      });
    } else if (senhaMedico === null && dtNascimentoMedico === null) {
      await api.put(`/Medico/${idMedico}`, {
        nomeMedico,
        rgMedico,
        cpfMedico,
        crm,
        especialidade,
        enderecoMedico,
        cepMedico,
        numeroMedico,
        bairroMedico,
        cidadeMedico,
        emailMedico,
      });
    } else {
      await api.put(`/Medico/${idMedico}`, {
        nomeMedico,
        rgMedico,
        cpfMedico,
        crm,
        especialidade,
        enderecoMedico,
        cepMedico,
        numeroMedico,
        bairroMedico,
        cidadeMedico,
        emailMedico,
        dtNascimentoMedico,
        senhaMedico,
      });
    }
  }

  async function alterarmedico(idmedico) {
    await api
      .get(`/Medico/${idmedico}`)
      .then((res) => {
        res.data.map((data) => (
          // eslint-disable-next-line no-sequences
          setNomeMedico(data.nomeMedico),
          setRgMedico(data.rgMedico),
          setCpfMedico(data.cpfMedico),
          setCrm(data.crm),
          setEspecialidade(data.especialidade),
          setEnderecoMedico(data.enderecoMedico),
          setCepMedico(data.cepMedico),
          setNumeroMedico(data.numeroMedico),
          setBairroMedico(data.bairroMedico),
          setCidadeMedico(data.cidadeMedico),
          setEmailMedico(data.emailMedico),
          setIdMedico(data.idmedico),
          setSenhaMedico(data.senhaMedico),
          setDtNascimentoMedico(data.dtNascimentoMedico)
        ));
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <div className="Titulo">
          <h2>Cadastrar Usuário</h2>
        </div>
        <div>
          <div>
            <div className="OrganizarCampoComDois">
              <div>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Nome Completo"
                  defaultValue={nomeMedico}
                  onChange={(e) => setNomeMedico(e.target.value)}
                  InputProps={{
                    className: 'inputsCadastro',
                  }}
                  InputLabelProps={{
                    className: 'labelsCadastro',
                  }}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  id="date"
                  label="Data de Nascimento"
                  type="date"
                  defaultValue="0000-00-00"
                  className={classes.textField}
                  onChange={(e) => setDtNascimentoMedico(e.target.value)}
                  InputProps={{
                    className: 'inputsCadastro',
                  }}
                  InputLabelProps={{
                    shrink: true,
                    className: 'labelsCadastro',
                  }}
                />
              </div>
            </div>
            <div className="OrganizarCampoComTres">
              <div>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Registro Geral"
                  defaultValue={rgMedico}
                  onChange={(e) => setRgMedico(e.target.value)}
                  InputProps={{
                    className: 'inputsCadastro',
                  }}
                  InputLabelProps={{
                    className: 'labelsCadastro',
                  }}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="CPF"
                  type="number"
                  defaultValue={cpfMedico}
                  onChange={(e) => setCpfMedico(e.target.value)}
                  InputProps={{
                    className: 'inputsCadastro',
                    draggable: false,
                  }}
                  InputLabelProps={{
                    className: 'labelsCadastro',
                  }}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="CRM"
                  defaultValue={crm}
                  onChange={(e) => setCrm(e.target.value)}
                  InputProps={{
                    className: 'inputsCadastro',
                  }}
                  InputLabelProps={{
                    className: 'labelsCadastro',
                  }}
                />
              </div>
            </div>
            <div>
              <div className="OrganizarCampoComDois">
                <div>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Especialidade"
                    defaultValue={especialidade}
                    onChange={(e) => setEspecialidade(e.target.value)}
                    InputProps={{
                      className: 'inputsCadastro',
                    }}
                    InputLabelProps={{
                      className: 'labelsCadastro',
                    }}
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="CEP"
                    defaultValue={cepMedico}
                    onChange={(e) => setCepMedico(e.target.value)}
                    InputProps={{
                      className: 'inputsCadastro',
                    }}
                    InputLabelProps={{
                      className: 'labelsCadastro',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="OrganizarCampoComDois">
              <div>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Endereço Residencial"
                  defaultValue={enderecoMedico}
                  onChange={(e) => setEnderecoMedico(e.target.value)}
                  InputProps={{
                    className: 'inputsCadastro',
                  }}
                  InputLabelProps={{
                    className: 'labelsCadastro',
                  }}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Numero"
                  type="number"
                  defaultValue={numeroMedico}
                  onChange={(e) => setNumeroMedico(e.target.value)}
                  InputProps={{
                    className: 'inputsCadastro',
                  }}
                  InputLabelProps={{
                    className: 'labelsCadastro',
                  }}
                />
              </div>
            </div>
            <div className="OrganizarCampoComDois">
              <div>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Bairro"
                  defaultValue={bairroMedico}
                  onChange={(e) => setBairroMedico(e.target.value)}
                  InputProps={{
                    className: 'inputsCadastro',
                  }}
                  InputLabelProps={{
                    className: 'labelsCadastro',
                  }}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Cidade"
                  defaultValue={cidadeMedico}
                  onChange={(e) => setCidadeMedico(e.target.value)}
                  InputProps={{
                    className: 'inputsCadastro',
                  }}
                  InputLabelProps={{
                    className: 'labelsCadastro',
                  }}
                />
              </div>
            </div>
            <div className="OrganizarCampoComDois">
              <div>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Email"
                  defaultValue={emailMedico}
                  onChange={(e) => setEmailMedico(e.target.value)}
                  InputProps={{
                    className: 'inputsCadastro',
                  }}
                  InputLabelProps={{
                    className: 'labelsCadastro',
                  }}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Senha"
                  onChange={(e) => setSenhaMedico(e.target.value)}
                  InputProps={{
                    className: 'inputsCadastro',
                  }}
                  InputLabelProps={{
                    className: 'labelsCadastro',
                  }}
                />
              </div>
            </div>
            <div className="linhaBotaoCriar">
              <div />
              <div />
              <div>
                <button type="submit" className="BotaoCriar" onClick={alterarBanco}>Alterar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  async function deletarMedico(idmedico) {
    await api.delete(`/Medico/${idmedico}`);
    document.location.reload(true);
  }

  function handleMedicoDelete(idmedico) {
    confirmAlert({
      title: 'Confirmação de exclusão de médico',
      message: 'Deseja mesmo deletar o cadastro deste médico?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => { deletarMedico(idmedico); },
        },
        {
          label: 'Não',
        },
      ],
    });
  }

  useEffect(() => {
    api
      .get('/Medico')
      .then((res) => {
        setMedicos(
          res.data.map((data) => (
            <StyledTableRow key={data.idmedico}>
              <StyledTableCell component="th" scope="row">
                {data.nomeMedico}
              </StyledTableCell>
              <StyledTableCell align="center">{data.crm}</StyledTableCell>
              <StyledTableCell align="center">{data.especialidade}</StyledTableCell>
              <StyledTableCell align="center">
                <div className="linhaAcoesTabela">
                  <div>
                    <button type="button" className="botaoAlterarMedico" onClick={() => alterarmedico(data.idmedico)}>Alterar</button>
                  </div>
                  <div>
                    <button type="button" className="botaoDeletarMedico" onClick={() => handleMedicoDelete(data.idmedico)}>Deletar</button>
                  </div>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          )),
        );
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell align="center">CRM</StyledTableCell>
              <StyledTableCell align="center">Cargo/Especialidade</StyledTableCell>
              <StyledTableCell align="center">Ações</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { medicos }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
