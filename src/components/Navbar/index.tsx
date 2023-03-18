import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import history from '../../util/history';
import { AuthContext } from '../../AuthContext';

import 'bootstrap/js/src/collapse.js';
import './style.css';
import { getTokenData, isAuthenticated } from '../../util/auth';
import { removeAuthData } from '../../util/storage';

//armazena informação se o usuário esta logado
const Navbar = () => {
  //instancia o estado de autenticação global da aplicação
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      //se estiver autenticado, altera o estado global
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
    //passando função setAuthContextData, porque se ela for executada em entro componente, executa novamente aqui
  }, [setAuthContextData]);

  const handleLoginClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="bg-primary navbar navbar-expand-md navbar-dark fixed-top">
      <div className="nav-container container-fluid">
        <Link to="/" className="nav-logo-text navbar-brand">
          <h4>DS Catalog</h4>
        </Link>

        <button
          className="navbar-toggler bg-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="nav-menu-container navbar-nav offset-md-4">
            <li>
              <NavLink to="/" activeClassName='active' className="nav-menu-item" exact>
                HOME
              </NavLink>
            </li>
            <li>
<<<<<<< HEAD
              <NavLink to="/products" activeClassName='active' className="nav-menu-item">
=======
              <NavLink to="/products" className="nav-menu-item active">
>>>>>>> 7961da8efcfb16431406df2082f04b7fef463fc2
                CATÁLOGOS
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeClassName='active' className="nav-menu-item">
                ADMIN
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="nav-login">
          {authContextData.authenticated ? (
            <span className='nav-login-container'>
              <span className="nav-login-user">
                {authContextData.tokenData?.user_name}
              </span>
              <a href="/" onClick={handleLoginClick}>
                <h2>LOGOUT</h2>
              </a>
            </span>
          ) : (
            <Link to="/admin/auth">
              <h2>LOGIN</h2>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
