import axios from 'axios';
import Pagination from '../../components/Pagination';
import ProductCard from '../../components/ProductCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { SpringPage } from '../../types/vendor/spring';
import { AxiosParams } from '../../types/vendor/axios';
import { baseUrl } from '../../http/requests';

import './style.css';

const Catalog = () => {
  //estado do tipo page de Product
  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${baseUrl}/products`,
      //data = corpo da req
      params: {
        page: 0,
        size: 12,
      },
    };

    axios(params).then((response) => {
      setPage(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="container catalog-container">
      <div className="row catalog-title">
        <h1>Catálogo de produtos</h1>
      </div>

      <div className="row">
        {page?.content.map(product => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <Link to={`/products/${product.id}`}>
              {/* deve-se informar uma chave unica para os elemento de uma coleção */}
              <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </div>

      <div className="row catalog-pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
