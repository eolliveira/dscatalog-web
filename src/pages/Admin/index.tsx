import { Route, Switch } from 'react-router-dom';
import Navbar from './NavBar';
import './style.css';
import Users from './Users';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        {/* Rotas aninhadas */}
        <Switch>
          <Route path="/admin/products">
            <h1>CRUD PRODUCTS</h1>
          </Route>
          <Route path="/admin/categories">
            <h1>CRUD CATEGORIES</h1>
          </Route>
          <Route path="/admin/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
