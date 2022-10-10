import { Route, Switch } from 'react-router-dom';
import AuthImg from '../../../assets/img/auth-image.svg';
import Login from './Login';

import './style.css';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Divulge seus produtos no DSCatalog </h1>
        <p>
          Faça partre de nosso catálogo de divulgação e aumente a venda dos seus
          produtos
        </p>
        <img src={AuthImg} alt="Imagem Banner" />
      </div>
      <div className="auth-form-container">
        <Switch>
          <Route path="/admin/auth/login">
            <Login />
          </Route>

          <Route path="/admin/auth/signup">
            <h1>form de signup</h1>
          </Route>

          <Route path="/admin/auth/recover">
            <h1>form de recover</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
