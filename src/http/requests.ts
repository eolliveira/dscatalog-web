import axios, { AxiosRequestConfig } from 'axios';
import jwtDecode from 'jwt-decode';
import qs from 'qs';
import { TokenData } from '../types/TokenData';
import history from '../util/history';

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

export const removeAuthData = () => {
  localStorage.removeItem('authKey');
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

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    //redireciona para tela de login
    if (error.response.status === 401 || error.response.status === 403) {
      history.push('/admin/auth');
    }

    return Promise.reject(error);
  }
);

//metodo para decodificar token e devolve obj tokenData(pode retornar o tipo, ou undefined)
export const getTokenData = (): TokenData | undefined => {
  try{
    return jwtDecode(getAuthData().access_token) as TokenData;
  }
  catch(error) {
    return undefined;
  }
};


//função que identifica se o usuário esta autênticado
export const isAuthenticated = () : boolean => {
  const tokenData = getTokenData()
  //verifica se tokenData não é undefined e se o token não esta expirado
  return (tokenData && tokenData?.exp * 1000 > Date.now()) ? true : false;
}