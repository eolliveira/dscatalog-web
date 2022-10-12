import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

export const baseUrl = 'http://localhost:8080';

export const CLIENT_ID = 'dscatalog';
export const CLIENT_SECRET = 'dscatalog123';

//tipo dos dados requeridos para efetuar login
type LoginData = {
  username: string;
  password: string;
};

//tipo da resposta da requisição login
type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: string;
  scope: string;
  userFirstName: string;
  userId: string;
};

//função que faz login
export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',

    //gera um rash base64
    Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
  };

  //gera urlEncoded referente ao obj
  const data = qs.stringify({
    ...loginData,
    grant_type: 'password',
  });

  return axios({
    method: 'POST',
    baseURL: baseUrl,
    url: '/oauth/token',
    //tipo não precisa informar
    //quando os nomes são iguais
    headers,
    data,
  });
};

//salva dados de autenticação no LocalStorage
export const saveAuthData = (loginResponse: LoginResponse) => {
  //adiciona objeto recebido ao localStorage, convertendo para string

  //   LOCAL STORAGE SÓ ACEITA STRING
  localStorage.setItem('authKey', JSON.stringify(loginResponse));
};

export const getAuthData = () => {
  //Retorna obj convertido pra str(se não houver daddos, retorna obj vazio)
  //as LoginData => garante o tipo do retorno
  return JSON.parse(localStorage.getItem('authKey') ?? '{}') as LoginResponse;
};

export const requestBackend = (config: AxiosRequestConfig) => {
  //se solicitar autenticação 
  const headers = config.withCredentials
    ? {
      //adiciona aos headers o token
        ...config.headers,
        Authorization: 'Bearer ' + getAuthData().access_token,
      }
    : config.headers;

  return axios({ ...config, baseURL: baseUrl, headers });
};
