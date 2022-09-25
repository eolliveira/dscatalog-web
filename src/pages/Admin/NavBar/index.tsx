import './style.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="admin-nav-container">
        <a href="">
          <li className="admin-nav-item active">Produtos</li>
        </a>
        <a href="">
          <li className="admin-nav-item">Categorias</li>
        </a>
        <a href="">
          <li className="admin-nav-item">Usuários</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
