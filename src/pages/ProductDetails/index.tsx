import ProductPrice from '../../components/ProductPrice';
import { ReactComponent as ArrowImg } from '../../assets/img/arrow-left.svg';
import './style.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import axios from 'axios';
import { baseUrl } from '../../http/requests';

const ProductDetails = () => {
  let [product, setProduct] = useState<Product>();

  type urlParams = {
    productId : string
  }

  //useParamns -> hook do reactRouter Dom, para pegar o parametro da url
  const { productId } = useParams<urlParams>();


  //(useEffect) para ser atualizado ao iniciar o componente apenas, ou com base nos obj monitorados
  useEffect(() => {

    //retona uma promisse(assinc)
    axios.get(`${baseUrl}/products/${productId}`).then((response) => {
      setProduct(response.data);
    });
  }, [productId]); // lista estados que serão monitorados 



  return (
    <div className="product-details-container">
      <div className="product-details-card base-card">
        <Link to="/products">
          <div className="product-details-btn-voltar">
            <ArrowImg />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div className="row product-details-product-container">
          <div className="product-details-product col-xl-6">
            <div className="product-details-img">
              <img src={product?.imgUrl} alt="Imagem do Produto" />
            </div>
            <div className="product-details-text">
              <h2>{product?.name}</h2>
              {/* se product for indefined, não passa o valor */}
              {product && <ProductPrice price={product?.price} />}
            </div>
          </div>
          <div className="product-details-description col-xl-6">
            <h3>Descrição</h3>
            <p>
              {product?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
