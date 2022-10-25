import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import history from '../util/history';
import { getAuthData } from '../util/storage';

export const baseUrl = 'http://localhost:8080';

export const CLIENT_ID = 'dscatalog';
export const CLIENT_SECRET = 'dscatalog123';

//tipo dos dados requeridos para efetuar login
type LoginData = {
  username: string;
  password: string;
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
    if (error.response.status === 401) {
      history.push('/admin/auth');
    }

    return Promise.reject(error);
  }
);
