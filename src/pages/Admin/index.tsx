import {  Route, Switch } from 'react-router-dom';
import Navbar from './NavBar';
import './style.css';

const Admin = () => {
  const product = {
    id: 1,
    name: 'The Lord of the Rings',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 1190.5,
    imgUrl:
      'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg',
    date: '2020-07-13T20:50:07.123450Z',
    categories: [
      {
        id: 2,
        name: 'Eletrônicos',
        products: [],
      },
    ],
  };

  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
          <Switch>
            <Route path="/admin/products">
            <h1>CRUD PRODUCTS</h1>
            </Route>
            <Route path="/admin/categories">
            <h1>CRUD CATEGORIES</h1>
            </Route>
            <Route path="/admin/users">
              <h1>CRUD USUARIOS</h1>
            </Route>
          </Switch>
      </div>
    </div>
  );
};

export default Admin;
