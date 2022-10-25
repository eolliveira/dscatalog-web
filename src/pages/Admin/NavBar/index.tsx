import { NavLink } from 'react-router-dom';
import { hasAnyHole } from '../../../util/auth';
import './style.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="admin-nav-container">
        <li>
          <NavLink to="/admin/products" className="admin-nav-item">
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/categories" className="admin-nav-item">
            Categorias
          </NavLink>
        </li>
        {/* SE USUÁRIO LOGADO FOR ADMIN */}
        {hasAnyHole(['ROLE_ADMIN']) && (
          <li>
            <NavLink to="/admin/users" className="admin-nav-item">
              Usuários
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
