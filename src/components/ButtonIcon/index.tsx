import styled from 'styled-components';
import { ReactComponent as ArrowImg } from '../../assets/img/arrow.svg';
import './style.css';

type Props = {
  text: String;
};

//desestrutura text do obj Props
const ButtonIcon = ({ text }: Props) => {
  return (
    <Container>
      <div className="btn-text btn btn-primary">
        <h6>{text}</h6>
      </div>
      <div className="btn-img">
        <ArrowImg />
      </div>
    </Container>
  );
};

export default ButtonIcon;


const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
