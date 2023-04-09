import { Container, ButtonText } from './style';

type Props = {
  text: String;
  maxWidth: number;
};

//desestrutura text do obj Props
const Button = ({ text, maxWidth }: Props) => {
  return (
    <Container maxWidth={maxWidth}>
      <ButtonText className="btn btn-primary">
        <h6>{text}</h6>
      </ButtonText>
    </Container>
  );
};

export default Button;
