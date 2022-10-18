import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';
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
          <PrivateRoute path="/admin/products">
            <h1>CRUD PRODUCTS</h1>
          </PrivateRoute>
          <PrivateRoute path="/admin/categories">
            <h1>CRUD CATEGORIES</h1>
          </PrivateRoute>
          <PrivateRoute path="/admin/users">
            <Users />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
