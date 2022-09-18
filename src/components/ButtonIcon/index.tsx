import { ReactComponent as ArrowImg } from '../../assets/img/arrow.svg';
import './style.css';

type Props = {
  text : String;
}

//desestrutura text do obj Props
const ButtonIcon = ({ text }: Props ) => {
  return (
    <div className="btn-container">
      <button className="btn-text btn btn-primary">
        <h6>{text}</h6>
      </button>
      <div className="btn-img">
        <ArrowImg />
      </div>
    </div>
  );
};

export default ButtonIcon;
