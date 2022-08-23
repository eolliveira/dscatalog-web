import './style.css';
import ProductImg from '../../assets/img/product-card.png'
import ProductPrice from '../ProductPrice';

const ProductCard = () => {
  return (
    <div className="product-card base-card">
      <div className="product-card-top">
        <img src={ProductImg} alt="Imagem do Produto" />
      </div>
      <div className="product-card-bottom">
        <h6>Nome do Produto</h6>
        <ProductPrice />
      </div>
    </div>
  );
};

export default ProductCard;
