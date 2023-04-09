import { Product } from '../../types/Product';
import ProductPrice from '../ProductPrice';
import { CardImage, CardName, ProductContainer } from './style';

type Props = {
  product: Product;
};

const ProductCrudCard = ({ product }: Props) => {
  return (
    <ProductContainer className="base-card">
      <CardImage>
        <img src={product.imgUrl} alt={product.name} />
      </CardImage>
      <CardName>
        <h6>{product.name}</h6>
        <ProductPrice price={product.price} />
      </CardName>
    </ProductContainer>
  );
};

export default ProductCrudCard;
