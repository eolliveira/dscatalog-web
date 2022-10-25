//tipo da resposta da requisição login
type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: string;
  scope: string;
  userFirstName: string;
  userId: string;
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
