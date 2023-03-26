import ProductPrice from '../../components/ProductPrice';
import { ReactComponent as ArrowImg } from '../../assets/img/arrow-left.svg';
import './style.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../../http/requests';
import ProductLoader from './ProductLoader';
import styled from 'styled-components';

const ProductDetails = () => {
  let [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(false);

  type urlParams = {
    productId: string;
  };

  //useParamns -> hook do reactRouter Dom, para pegar o parametro da url
  const { productId } = useParams<urlParams>();

  //(useEffect) para ser atualizado ao iniciar o componente apenas, ou com base nos obj monitorados
  useEffect(() => {
    setIsLoading(true);

    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/products/${productId}`,
    };

    requestBackend(params)
      .then((response) => {
        setProduct(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]); // lista estados que serão monitorados

  return (
    <Container>
      {/* se isLoading for true  */}
      {isLoading ? (
        <ProductLoader />
      ) : (
        <Card className="base-card">
          <Link to="/products">
            <BackButton>
              <ArrowImg />
              <h2>VOLTAR</h2>
            </BackButton>
          </Link>
          <ProductContainer className="row">
            <ProductData className="col-xl-6">
              <ImageContainer >
                <img src={product?.imgUrl} alt="Imagem do Produto" />
              </ImageContainer>
              <div className="product-details-text">
                <h2>{product?.name}</h2>
                {/* se product for indefined, não passa o valor */}
                {product && <ProductPrice price={product?.price} />}
              </div>
            </ProductData>
            <ProductDescription className="col-xl-6">
              <h3>Descrição</h3>
              <p>{product?.description}</p>
            </ProductDescription>
          </ProductContainer>
        </Card>
      )}
    </Container>
  );
};

export default ProductDetails;

const Container = styled.div`
  padding: 20px;
`;

const Card = styled.div`
  padding: 20px;
  height: calc(100vh - 96px);
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  h2 {
    margin-left: 15px;
    font: 22px;
    color: #263238;
    text-decoration: none;
  }

  &:hover {
    color: #263238;
  }
`;

const ProductContainer = styled.div`
  margin: 8px;

  @media (min-width: 1024px) {
    .product-details-product-container {
      margin: 18px;
    }
  }

  @media (min-width: 1024px) {
    .product-details-product-container {
      margin: 18px;
    }
  }

  @media (min-width: 1200px) {
    .product-details-product-container {
      display: flex;
      align-items: unset;
    }
  }
`;

const ProductData = styled.div`
  margin: 0;
  padding: 0;

  h2 {
    font-size: 27px;
  }

  @media (min-width: 1024px) {
    .product-details-product {
      margin: 0;
      padding: 0;
    }
  }

  @media (min-width: 1024px) {
    .product-details-product {
      margin: 0;
      padding: 0;
    }
  }
`;

const ProductDescription = styled.div`
  padding: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  margin-top: 30px;

  h3 {
    font-size: 18px;
    color: #9e9e9e;
    margin-bottom: 20px;
  }

  @media (min-width: 1200px) {
    .product-details-description {
      margin: 0;
    }
  }
`;

const ImageContainer = styled.div`
  text-align: center;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 15px;
  margin-right: 50px;

  img {
    max-width: 270px;
    width: 100%;
  }

  @media (min-width: 1200px) {
    .product-details-img {
      margin-right: 50px;
    }

    @media (min-width: 1440px) {
      .product-details-img {
        margin-right: 50px;
      }
    }
  }
`;

const Image = styled.div``;
