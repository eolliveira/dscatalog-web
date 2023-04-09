import { Product } from '../../types/Product';
import { BadgeCategory } from '../BadgeCategory';
import ProductPrice from '../ProductPrice';
import { CardCategory, CardImage, CardName, ProductContainer } from './style';

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
      <CardCategory>
        {product.categories.map((category) => (
          <BadgeCategory text={category.name} key={category.id} />
        ))}
      </CardCategory>
    </ProductContainer>
  );
};

export default ProductCrudCard;
