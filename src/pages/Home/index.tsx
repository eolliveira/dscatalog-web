import Navbar from '../../components/Navbar';
import './style.css';
import mainImage from '../../assets/img/main-image.svg';

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <div className="home-container">
          <div className="home-card">
            <div className="home-image-container">
              <img src={mainImage} alt="#" />
            </div>

            <h2>dfgdfgdf</h2>

            <p>dfdgdgdg</p>

            <div className="home-button">
              <a href="#">INICIE AGORA SUA BUSCA</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
