import React from 'react';

import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';

import './HomePaciente.css';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    boxShadow: 3,
    bgcolor: 'background.paper',
    flexGrow: 1,
    fontWeight: 'bold',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  seach: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    color: '#ffffff !important',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    padding: '40px',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SimpleCard() {
  const classes = useStyles();


  return (
    <div>
      <div className="CabeçalhoHomePaciente">
        <div className="NomeSistemaHomePaciente">
          <h3>MedTCC</h3>
        </div>
        <div className="NomeTelaHomePaciente">
          <h2>Bem vindo Paciente Niamh Weir</h2>
        </div>
        <div className="CampoPesquisaPaciente">
          <div>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  placeholder="Search"
                  inputProps={{
                    className: 'inputSearch',
                  }}
                />
              </Grid>
              <Grid item>
                <SearchIcon />
              </Grid>
            </Grid>
          </div>
          <div className="iconePaciente" />
        </div>
      </div>
      <div className="NomeSubTituloHomePaciente">
        <div>Suas próximas consultas</div>
      </div>
      <div className="BodyHomePaciente">
        <div>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2" className="CabeçalhoCardPaciente">
                Dra. Daniela Sandra Ferreira
              </Typography>
              <Typography variant="body2" component="p" className="P1Paciente">
                Rua Manoel Barros de Oliveira Nº 265
              </Typography>
              <Typography variant="body2" component="p" className="P1Paciente">
                13/06/2020 10:00
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="ButtonPrimeiraConsultaPaciente">Primeira Consulta</Button>
            </CardActions>
          </Card>
        </div>
        <div />
        <div>
          <Card className={classes.root} boxShadow={3}>
            <CardContent>
              <Typography variant="h5" component="h2" className="CabeçalhoCardPaciente">
                Dr. Roy Weeks
              </Typography>
              <Typography variant="body2" component="p" className="P1Paciente">
                Av. Barkleys Nº 10
              </Typography>
              <Typography variant="body2" component="p" className="P1Paciente">
                12/06/2020 10:00
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="ButtonSegundaConsultaPaciente">Retorno para resultados</Button>
            </CardActions>
          </Card>
        </div>
        <div />
        <div />
      </div>
    </div>
  );
}
