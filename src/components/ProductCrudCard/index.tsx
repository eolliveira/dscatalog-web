import { Product } from '../../types/Product';
import { BadgeCategory } from '../BadgeCategory';
import ProductPrice from '../ProductPrice';
import { ButtonRemove, ButtonUpdate, CardButtons, CardCategory, CardImage, CardName, ProductContainer } from './style';

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
      <CardButtons>
        <ButtonRemove className="btn btn-outline-danger">EXCLUIR</ButtonRemove>
        <ButtonUpdate className="btn btn-outline-secondary">EDITAR</ButtonUpdate>
      </CardButtons>
    </ProductContainer>
  );
};

export default ProductCrudCard;
