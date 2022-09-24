import ProductImg from '../../assets/img/product-card.png';
import ProductPrice from '../../components/ProductPrice';
import { ReactComponent as ArrowImg } from '../../assets/img/arrow-left.svg';
import './style.css';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
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
              <img src={ProductImg} alt="Imagem do Produto" />
            </div>
            <div className="product-details-text">
              <h2>Computador Desktop - Intel Core i7</h2>
              <ProductPrice price={54887} />
            </div>
          </div>
          <div className="product-details-description col-xl-6">
            <h3>Descrição do Produto</h3>
            <p>
              Seja um mestre em multitarefas com a capacidade para exibir quatro
              aplicativos simultâneos na tela. A tela está ficando abarrotada?
              Crie áreas de trabalho virtuais para obter mais espaço e trabalhar
              com os itens que você deseja. Além disso, todas as notificações e
              principais configurações
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
