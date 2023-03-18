import './style.css';
import { ReactComponent as MainImage } from '../../assets/img/main-image.svg';
import ButtonIcon from '../../components/ButtonIcon';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <div className="home-container">
        <div className="home-card base-card">
          <div className="home-card-content-container">
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>
              Ajudaremos você a encontrar os melhores produtos disponíveis no
              mercado.
            </p>
            <div className="home-card-content-btn">
              <Link to="/products">
                <ButtonIcon text="Inicie agora sua busca" />
              </Link>
            </div>
          </div>
          <div className="home-card-image-container">
            <MainImage />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
