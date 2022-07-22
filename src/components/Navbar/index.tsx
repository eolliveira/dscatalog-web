import './style.css';

function Navbar() {
  return (
    <nav className="bg-primary">
      <div className="nav-container">
        <a href="#" className="title-container">
          <h4>DS Catalog</h4>
        </a>

        <div>
          <ul className="menu-container">
            <li className="nav-item">
              <a href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a href="#">CATÁLOGO</a>
            </li>
            <li className="nav-item">
              <a href="#">ADMIN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

<nav className="bg-primary">
  <div>
    <a href="link">
      <h4>DS Catalog</h4>
    </a>
    <div>
      <ul>
        <li>
          <a href="link">HOME</a>
        </li>
        <li>
          <a href="link">CATÁLOGO</a>
        </li>
        <li>
          <a href="link">ADMIN</a>
        </li>
      </ul>
    </div>
  </div>
</nav>;
