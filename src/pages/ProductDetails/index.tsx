import ProductPrice from '../../components/ProductPrice';
import { ReactComponent as ArrowImg } from '../../assets/img/arrow-left.svg';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../../http/requests';
import ProductLoader from './ProductLoader';
import { Container, Card, BackButton, ProductContainer, ProductName, ProductDescription, ProductData, ImageContainer } from './styles'

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
    <Container >
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
              <ImageContainer>
                <img src={product?.imgUrl} alt="Imagem do Produto" />
              </ImageContainer>
              <ProductName>
                <h2>{product?.name}</h2>
                {/* se product for indefined, não passa o valor */}
                {product && <ProductPrice price={product?.price} />}
              </ProductName>
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


