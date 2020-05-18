import React from 'react';

import { TextField } from '@material-ui/core';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

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

  const handleOpen = () => {
    setOpen(true);
  };

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
                <TextField id="standard-basic" label="Nome Completo" />
              </div>
              <div>
                <TextField id="standard-basic" label="Data de Nascimento" />
              </div>
            </div>
            <div className="OrganizarCampoComTres">
              <div>
                <TextField id="standard-basic" label="Registro Geral" />
              </div>
              <div>
                <TextField id="standard-basic" label="CPF" />
              </div>
              <div>
                <TextField id="standard-basic" label="CRM" />
              </div>
            </div>
            <div>
              <div className="OrganizarCampoComDois">
                <TextField id="standard-basic" label="Cargo Especialidade" />
              </div>
            </div>
            <div className="OrganizarCampoComDois">
              <div>
                <TextField id="standard-basic" label="Endereço Residencial" />
              </div>
              <div>
                <TextField id="standard-basic" label="Numero" />
              </div>
            </div>
            <div className="OrganizarCampoComDois">
              <div>
                <TextField id="standard-basic" label="Bairro" />
              </div>
              <div>
                <TextField id="standard-basic" label="Cidade" />
              </div>
            </div>
            <div>
              <button type="submit" className="Botao">Criar</button>
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
