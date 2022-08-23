import { ReactComponent as ArrowImg } from '../../assets/img/arrow.svg';
import './style.css';

const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <button className="btn-text btn btn-primary">
        <h6>inicie agora sua busca</h6>
      </button>
      <div className="btn-img">
        <ArrowImg />
      </div>
    </div>
  );
};

export default ButtonIcon;
