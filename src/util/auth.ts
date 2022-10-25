import jwtDecode from 'jwt-decode';
import { Role } from '../types/Role';
import { TokenData } from '../types/TokenData';
import { getAuthData } from './storage';

//metodo para decodificar token e devolve obj tokenData(pode retornar o tipo, ou undefined)
export const getTokenData = (): TokenData | undefined => {
  try {
    return jwtDecode(getAuthData().access_token) as TokenData;
  } catch (error) {
    return undefined;
  }
};

//função que identifica se o usuário esta autênticado
export const isAuthenticated = (): boolean => {
  const tokenData = getTokenData();
  //verifica se tokenData não é undefined e se o token não esta expirado
  return tokenData && tokenData?.exp * 1000 > Date.now() ? true : false;
};

//função que verifica se usuário, possui alguem role da lista de  parametros
export const hasAnyHole = (roles: Role[]): boolean => {
  if (roles.length === 0) return true;

  //captura obj com os dados do usuário
  const tokenData = getTokenData();

  if (tokenData !== undefined) {
    //returna true se atender ao predicado
    return roles.some((role) => tokenData.authorities.includes(role));

    //metodo alternativo
    // for (var i = 0; i < roles.length; i++) {
    //   //percorre lista Roles do usuário , se contem algum da lista de Role que veio no parametro
    //   if (tokenData.authorities.includes(roles[i])) {
    //     return true;
    //   }
    // }
  }

  return false;
};
