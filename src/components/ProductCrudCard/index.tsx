import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import { BadgeCategory } from '../BadgeCategory';
import ProductPrice from '../ProductPrice';
import {
  ButtonRemove,
  ButtonUpdate,
  CardButtons,
  CardCategory,
  CardImage,
  CardInformation,
  CardName,
  ProductContainer,
} from './style';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../../http/requests';

type Props = {
  product: Product;
  onDelete: Function;
};

const ProductCrudCard = ({ product, onDelete }: Props) => {
  const handleDelete = (productId: number) => {

    if(!window.confirm('Tem certeza que deseja deletar?')) {
      return;
    }


    const params: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/products/${productId}`,
      withCredentials: true,
    };

    requestBackend(params).then(() => {
      onDelete();
    });
  };

  return (
    <ProductContainer className="base-card">
      <CardImage>
        <img src={product.imgUrl} alt={product.name} />
      </CardImage>
      <CardInformation>
        <CardName>
          <h6>{product.name}</h6>
          <ProductPrice price={product.price} />
        </CardName>
        <CardCategory>
          {product.categories.map((category) => (
            <BadgeCategory text={category.name} key={category.id} />
          ))}
        </CardCategory>
      </CardInformation>
      <CardButtons>
        <ButtonRemove
          onClick={() => handleDelete(product.id)}
          className="btn btn-outline-danger"
        >
          EXCLUIR
        </ButtonRemove>
        <Link to={`/admin/products/${product.id}`}>
          <ButtonUpdate className="btn btn-outline-secondary">
            EDITAR
          </ButtonUpdate>
        </Link>
      </CardButtons>
    </ProductContainer>
  );
};

export default ProductCrudCard;
