import React, { useState } from 'react';

import { TextField } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import { api } from '../../../config/api';

import './CadastroUsuario.css';

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
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 700,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '20px',
  },
}));


export default function CadastroUsuario() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [nomeMedico, setNomeMedico] = useState('');
  const [dtNascimentoMedico, setDtNascimentoMedico] = useState('');
  const [rgMedico, setRgMedico] = useState('');
  const [cpfMedico, setCpfMedico] = useState('');
  const [crm, setCrm] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [enderecoMedico, setEnderecoMedico] = useState('');
  const [numeroMedico, setNumeroMedico] = useState('');
  const [cepMedico, setCepMedico] = useState('');
  const [bairroMedico, setBairroMedico] = useState('');
  const [cidadeMedico, setCidadeMedico] = useState('');
  const [emailMedico, setEmailMedico] = useState('');
  const [senhaMedico, setSenhaMedico] = useState('');


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUsuarioSave = async (e) => {
    e.preventDefault();
    await api.post('/Medico', {
      nomeMedico,
      dtNascimentoMedico,
      rgMedico,
      cpfMedico,
      crm,
      especialidade,
      enderecoMedico,
      numeroMedico,
      cepMedico,
      bairroMedico,
      cidadeMedico,
      emailMedico,
      senhaMedico,
    });
    document.location.reload();
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
                  onChange={(e) => setDtNascimentoMedico(e.target.value)}
                  type="date"
                  defaultValue="0000-00-00"
                  className={classes.textField}
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
                  onChange={(e) => setCpfMedico(e.target.value)}
                  type="number"
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
                  onChange={(e) => setNumeroMedico(e.target.value)}
                  type="number"
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
                <button type="submit" className="BotaoCriar" onClick={handleUsuarioSave}>Criar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen} className="BotaoCadastroUsuario">
        Novo Cadastro
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
