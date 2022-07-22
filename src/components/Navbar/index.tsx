import './style.css';

function Navbar() {
  return (
    //nav some ano breakpoint informado
    <nav className="bg-primary navbar navbar-expand-md">
      <div className="nav-container container-fluid">
        <a href="#" className="nav-logo-text navbar-brand">
          <h4>App Catalog</h4>
        </a>

        <div className="nav-menu collapse navbar-collapse">
          <ul className="nav-menu-container navbar-nav offset-md-4">
            <li>
              <a href="#" className='active'>HOME</a>
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
