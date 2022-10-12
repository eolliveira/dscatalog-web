import { AxiosRequestConfig } from 'axios';
import Pagination from '../../components/Pagination';
import ProductCard from '../../components/ProductCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { SpringPage } from '../../types/vendor/spring';
import { requestBackend } from '../../http/requests';

import './style.css';
import CardLoader from './CardLoader';

const Catalog = () => {
  //estado do tipo page de Product
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //AxiosRequestConfig = tipo padrão do axios para passar configurações na requisição
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      //data = corpo da req
      params: {
        page: 0,
        size: 12,
      },
    };

    setIsLoading(true);
    //faz requisição passando parametros
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container catalog-container">
      <div className="row catalog-title">
        <h1>Catálogo de produtos</h1>
      </div>

      <div className="row">
        {isLoading ? (
          <CardLoader />
        ) : (
          page?.content.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <Link to={`/products/${product.id}`}>
                {/* deve-se informar uma chave unica para os elemento de uma coleção */}
                <ProductCard product={product} />
              </Link>
            </div>
          ))
        )}
      </div>

      <div className="row catalog-pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
