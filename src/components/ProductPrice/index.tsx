import { formatPrice } from '../../util/formatters';
import './style.css';

type Props = {
  price: number;
};

const ProductPrice = ({ price }: Props) => {
  return (
    <div className="product-price-container">
      <p className="product-price-coin">R$</p>
      <p className="product-price-price">{formatPrice(price)}</p>
    </div>
  );
};

export default ProductPrice;
