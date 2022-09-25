import './style.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
              <NavLink to='/' className="nav-menu-item">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to='/products' className="nav-menu-item">
                CATÁLOGO
              </NavLink>
            </li>
            <li>
              <NavLink to='/admin' className="nav-menu-item">
                ADMIN
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
