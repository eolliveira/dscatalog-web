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
      render={() =>
        //se usuário não estiver altenticado para acesar a rota, é redirecionado para tela de login
        isAuthenticated() ? children : <Redirect to={'/admin/auth/login'} />
      }
    />
  );
};

export default PrivateRoute;
