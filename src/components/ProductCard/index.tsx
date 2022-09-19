import './style.css';
import ProductImg from '../../assets/img/product-card.png'
import ProductPrice from '../ProductPrice';
import { Product } from '../../types/Product';

type Props = {
  product : Product 
}

const ProductCard = ( { product } : Props) => {
  return (
    <div className="product-card base-card">
      <div className="product-card-top">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="product-card-bottom">
        <h6>{product.name}</h6>
        <ProductPrice price={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
