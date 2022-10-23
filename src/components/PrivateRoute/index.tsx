import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../../http/requests';

type Props = {
  //caminho da que sera verificada
  path: string;
  //permite conponente possuir 'filhos'
  children: React.ReactNode;
};

//rotas privadas, que irão requerir autenticação para serem acessadas
const PrivateRoute = ({ path, children }: Props) => {
  return (
    <Route
      path={path}
      render={({location}) =>
        //se usuário não estiver altenticado para acesar a rota, é redirecionado para tela de login
        isAuthenticated() ? children : <Redirect to={{
          pathname: '/admin/auth/login',
          //guarda rota que faz a chamada
          state: { from: location }
        }} />
      }
    />
  );
};

export default PrivateRoute;
