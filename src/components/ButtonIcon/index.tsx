import { ReactComponent as ArrowImg } from '../../assets/img/arrow.svg';
import { Container, ButtonText, ButtonImage } from './style';

type Props = {
  text: String;
};

//desestrutura text do obj Props
const ButtonIcon = ({ text }: Props) => {
  return (
    <Container>
      <ButtonText className="btn btn-primary">
        <h6>{text}</h6>
      </ButtonText>
      <ButtonImage>
        <ArrowImg />
      </ButtonImage>
    </Container>
  );
};

export default ButtonIcon;