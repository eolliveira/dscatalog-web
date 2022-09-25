import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products' element={ <Catalog /> } />
        <Route path='/admin' element={ <Admin /> } />
        <Route path='/products/:productId' element={ <ProductDetails /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesMain;
