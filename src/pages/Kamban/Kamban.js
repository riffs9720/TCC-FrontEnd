/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaChevronCircleLeft } from 'react-icons/fa';
import BoardWrapper from 'react-trello';

import './Kamban.css';
import closeFilled from '@iconify/icons-carbon/close-filled';
import { Icon } from '@iconify/react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: 'translateZ(0)',
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: 800,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '10px',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Aguardando atendimento',
      label: '2/2',
      cards: [
        {
          id: 'Card1',
          title: 'Write Blog',
          description: 'Can AI make memes',
          label: '30 mins', // Style of Lane
        },
        {
          id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' },
        },
      ],
    },
    {
      id: 'lane2',
      title: 'Em atendimento',
      label: '0/0',
      cards: [],
    },
    {
      id: 'lane3',
      title: 'Atendido',
      label: '0/0',
      cards: [],
    },
    {
      id: 'lane4',
      title: 'Não compareceu',
      label: '0/0',
      cards: [],
    },
  ],
};

export default function Kamban() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <div className="Prontuario">
        <div />
        <div>
          <h2>Prontuário</h2>
        </div>
        <div>
          <Icon icon={closeFilled} className="botaoFechar" onClick={handleClose} />
        </div>
      </div>
      <div className="corpoModal">
        <div className="modal-col1">
          <TextField
            id="standard-read-only-input"
            label="Nome Completo"
            defaultValue="Hello World"
            className="input-nome"
            InputProps={{
              readOnly: true,
            }}
            InputLabelProps={{
              className: 'input-nome',
            }}
          />
          <div className="espacador" />
          <TextField
            id="standard-read-only-input"
            label="CPF"
            defaultValue="Hello World"
            className="input-cpf"
            InputProps={{
              readOnly: true,
            }}
            InputLabelProps={{
              className: 'input-cpf',
            }}
          />
        </div>
        <div className="modal-col2">
          <TextField
            id="standard-read-only-input"
            label="Data de Nascimento"
            defaultValue="Hello World"
            className="input-dtNasciento"
            InputProps={{
              readOnly: true,
            }}
            InputLabelProps={{
              className: 'input-nome',
            }}
          />
        </div>
      </div>
      <div className="espacador" />
      <label className="label-evolucao">Evolução</label>
      <TextareaAutosize
        rowsMax={4}
        fullWidth
        className="Evolucao"
        aria-label="maximum height"
        placeholder="Maximum 10 rows"
      />
      <hr />
      <TextField
        id="standard-read-only-input"
        label="Tomando medicamentos?"
        placeholder="O paciente esta tomando algum medicamento, se sim, digite quais"
        className="input-medicamento"
        InputLabelProps={{
          className: 'input-medicamento',
        }}
      />
      <div className="espacador" />
      <div className="linha-prontuario-botao">
        <div />
        <div>
          <Button variant="contained" className="botaoSalvarProntuario">
            Editar
          </Button>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="container-kamban">
        <div className="cabecalho">
          <div className="nomeSistema">
            <h3>MedTCC</h3>
          </div>
          <div className="nomeMedico">
            <h2>Bem vindo Dr. Tobi Ross</h2>
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
        <div>
          <a href="/HomeMedico"><FaChevronCircleLeft className="Icon-Return" /></a>
        </div>
        <div className="kamban">
          <div />
          <div>
            <BoardWrapper data={data} className="fundoKamban" onCardClick={handleOpen} laneStyle={{ backgroundColor: '#34495E', color: '#ffffff' }} />
          </div>
          <div />
        </div>
        <Modal
          className="flutuante"
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </>
  );
}
