import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Home from './pages/Home';

const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products' element={ <Catalog /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesMain;
