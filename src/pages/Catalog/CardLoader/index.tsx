import ContentLoader from 'react-content-loader';
import './style.css';

const CardLoader = () => (
  <div className='card-loader-container'>
    <ContentLoader 
    speed={2}
    width={'100%'}
    height={460}
    viewBox="0 0 100% 460"
    backgroundColor="#f0f0f0"
    foregroundColor="#d6d6d6"
  >
    <rect x="0" y="60" rx="2" ry="2" width="100%" height="100%" />
  </ContentLoader>
  </div>
)

export default CardLoader;