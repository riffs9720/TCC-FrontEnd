/* eslint-disable import/prefer-default-export */
import axios from 'axios';

/* Uso local
export const api = axios.create({
  baseURL: 'http://localhost:3333',
}); */

export const api = axios.create({
  baseURL: 'https://backend-tcc.herokuapp.com/',
});
