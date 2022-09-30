import ContentLoader from 'react-content-loader';

const CardLoader = () => (
  <ContentLoader 
    speed={2}
    width={300}
    height={460}
    viewBox="0 0 300 460"
    backgroundColor="#f0f0f0"
    foregroundColor="#d6d6d6"
  >
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
)

export default CardLoader;