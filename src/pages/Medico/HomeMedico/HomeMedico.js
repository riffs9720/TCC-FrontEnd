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


import './HomeMedico.css';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    bgcolor: 'background.paper',
    flexGrow: 1,
    fontWeight: 'bold',
    boxShadow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
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
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SimpleCard() {
  const classes = useStyles();


  return (
    <div>
      <div className="CabeçalhoHomeMedico">
        <div className="NomeSistemaHomeMedico">
          <h3>MedTCC</h3>
        </div>
        <div className="NomeTelaHomeMedico">
          <h2>Bem vindo Dr. Tobi Ross</h2>
        </div>
        <div className="CampoPesquisa">
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
          <div className="iconeMedico" />
        </div>
      </div>
      <div className="NomeSubTituloHomeMedico">
        <div>Suas próximas consultas</div>
      </div>
      <div className="BodyHomeMedico">
        <div>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2" className="CabeçalhoCard">
                Lorna Whitefield
              </Typography>
              <Typography variant="body2" component="p" className="P1">
                Notas: Tem dores nas pernas e febre.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="ButtonPrimeiraConsulta">Primeira Consulta</Button>
            </CardActions>
          </Card>
        </div>
        <div />
        <div>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2" className="CabeçalhoCard">
                Florence Mason
              </Typography>
              <Typography variant="body2" component="p" className="P1">
                Notas: Não informado.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="ButtonPrimeiraConsulta">Primeira Consulta</Button>
            </CardActions>
          </Card>
        </div>
        <div />
        <div>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2" className="CabeçalhoCard">
                Sarah Talley
              </Typography>
              <Typography variant="body2" component="p" className="P1">
                Notas: Retorno para ver resultados do ultrassom
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="ButtonSegundaConsulta">Retorno para resultados</Button>
            </CardActions>
          </Card>
          <div className="linkMais">
            <div />
            <div />
            <div>
              <a href="/Kamban">Ver Mais</a>
            </div>
          </div>
        </div>
      </div>
      <div className="NomeSubTituloHomeMedico">
        <div>Resumo</div>
      </div>
    </div>
  );
}
