import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Auth from './pages/Admin/Auth';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import history from './util/history';

const RoutesMain = () => {
  return (
    //permite que possam ser redirecionadas pelo history
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/products" exact>
          <Catalog />
        </Route>

        <Route path="/products/:productId">
          <ProductDetails />
        </Route>

        {/* rota de login, pois a rota "admin", requer autorização */}
        <Redirect from="/admin/auth" to="/admin/auth/login" exact />
        <Route path="/admin/auth">
          <Auth />
        </Route>

        {/* nexting */}
        <Redirect from="/admin" to="/admin/products" exact />
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
};

export default RoutesMain;
