import './style.css';
import 'bootstrap/js/src/collapse.js';

function Navbar() {
  return (
    <nav className="bg-primary navbar navbar-expand-md navbar-dark">
      <div className="nav-container container-fluid">
        <a href="#" className="nav-logo-text navbar-brand">
          <h4>DS Catalog</h4>
        </a>

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
              <a href="#" className="active">
                HOME
              </a>
            </li>
            <li>
              <a href="#">CATÁLOGO</a>
            </li>
            <li>
              <a href="#">ADMIN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
