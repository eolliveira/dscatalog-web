import './style.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TokenData } from '../../types/TokenData';
import { getTokenData, isAuthenticated, removeAuthData } from '../../http/requests';
import history from '../../util/history';

//armazena informação se o usuário esta logado 
const Navbar = () => {
  type AuthData = {
    authenticated: boolean;
    tokenData?: TokenData;
  };

  const [authData, setAuthData] = useState<AuthData>({
    authenticated: false,
  });

  useEffect(() => {
    if (isAuthenticated()) {
      //se estiver autenticado, armazena os dados do token
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleLoginClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false
    });
    history.replace('/');
  }

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
              <NavLink to="/" className="nav-menu-item">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="nav-menu-item">
                CATÁLOGO
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" className="nav-menu-item">
                ADMIN
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='nav-login'>
          {authData.authenticated ? (
            <a href="/" onClick={handleLoginClick}>
              <span className='nav-login-user'>{authData.tokenData?.user_name}</span>
              <h2>LOGOUT</h2>
            </a>
          ) : (
            <Link to='/admin/auth'>
              <h2>LOGIN</h2>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
