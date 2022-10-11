import axios from 'axios';
import qs from 'qs';

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
    Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
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
    data
  })
};
