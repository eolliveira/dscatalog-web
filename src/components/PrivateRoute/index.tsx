import { Redirect, Route } from 'react-router-dom';
import { Role } from '../../types/Role';
import { hasAnyHole, isAuthenticated } from '../../util/auth';

type Props = {
  //caminho da que sera verificada
  path: string;
  //permite conponente possuir 'filhos'
  children: React.ReactNode;
  //recebe lista de roles
  roles?: Role[];
};

//rotas privadas, que irão requerir autenticação para serem acessadas
const PrivateRoute = ({ path, children, roles = [] }: Props) => {
  return (
    <Route
      path={path}
      render={({ location }) =>
        //se não estiver autenticado
        !isAuthenticated() ? (
          <Redirect
            to={{
              pathname: '/admin/auth/login',
              //guarda rota que faz a chamada
              state: { from: location },
            }}
          />
        ) : //se não tiver role
        !hasAnyHole(roles) ? (
          //redireciona para tela de CRUD de Produtos
          <Redirect to={'/admin/products'} />
        ) : (
          //mostra componente filho
          children
        )
      }
    />
  );
};

export default PrivateRoute;
