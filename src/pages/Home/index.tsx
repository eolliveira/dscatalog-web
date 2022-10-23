import './style.css';
import { ReactComponent as MainImage } from '../../assets/img/main-image.svg';
import ButtonIcon from '../../components/ButtonIcon';
import { Link } from 'react-router-dom';
import { hasAnyHole, isAuthenticated } from '../../http/requests';

const Home = () => {
  return (
    <main>
      <div className="home-container">
        <div className="home-card base-card">

          {/* teste */}
          {isAuthenticated() ? 'esta autenticado' : 'não autenticado'}

          {/* passa lista de Roles e verifica se o usuário logado as pertence */}
          { <h1>Resultado: { hasAnyHole(['ROLE_ADMIN']) ? 'sim' : 'não' }</h1> }

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
