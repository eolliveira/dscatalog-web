import Navbar from '../../components/Navbar';
import './style.css';
import mainImage from '../../assets/img/main-image.svg';
import arrow from '../../assets/img/arrow.svg';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="home-container">
          <div className="home-card-container">
            <div className="home-card">
              <img src={mainImage} alt="#" />
              <h2>Conheça o melhor catálogo de produtos</h2>

              <p>
                Ajudaremos você a encontrar os <br />
                melhores produtos disponíveis
                <br />
                no mercado.
              </p>

              <a href="#" className="home-btn-container">
                <div className="home-btn-content"></div>

                  <h3>INICIE AGORA SUA BUSCA</h3>

                <div className="home-btn-arrow">
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
