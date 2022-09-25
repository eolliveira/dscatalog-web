import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const RoutesMain = () => {
  return (
    <BrowserRouter>
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
        {/* nexting */}
        <Redirect from="/admin" to="/admin/products" exact />
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesMain;