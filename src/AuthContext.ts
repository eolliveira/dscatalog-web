import { createContext } from 'react';
import { TokenData } from './types/TokenData';


///ESTADO GLOBAL DE AUTENTICAÇÃO DO USUÁRIO 

//tipo do estado global
export type AuthContextData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

//objeto do estado, e função que será sobreescrita para alterar o estado
export type AuthContextType = {
    authContextData: AuthContextData;
    setAuthContextData: (authContextData: AuthContextData) => void;
};

//cria o contexto , ja informando o valor do objeto 
export const AuthContext = createContext<AuthContextType>({
    authContextData: {
        authenticated: false
    },
    setAuthContextData: () => null

})
