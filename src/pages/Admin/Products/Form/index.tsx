import styled from 'styled-components';
import { Container } from '../../../ProductDetails/styles';

export function Form() {
  return (
    <Wrapper>
      <Container className="base-card">
        <Title>CADASTRO DE PRODUTO</Title>
        <div className="row">
          <div className="col-lg-6">
            <input placeholder='Nome do produto' type="text" className="form-control base-input mb-3" />
            <input placeholder='Categoria' type="text" className="form-control base-input mb-3" />
            <input placeholder='Preço' type="text" className="form-control base-input mb-3" />
          </div>
          <div className="col-lg-6">
            <textarea placeholder='Descrição' cols={37} rows={10}></textarea>
          </div>
        </div>
        <ButtonsContainer>
          <ButtonCancel className="btn btn-outline-danger">CANCELAR</ButtonCancel>
          <ButtonAdd className="btn btn-outline-secondary">CADASTRAR</ButtonAdd>
        </ButtonsContainer>
      </Container>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Conatiner = styled.div`
  padding: 20px;

 
`;

export const Title = styled.h1`
margin-bottom: 30px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: -0.015em;

  color: #263238;
`;


export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: right;
  /* padding: 20px 10px;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
  } */
`;

export const ButtonAdd = styled.div`
  width: 160px;
`;

export const ButtonCancel = styled.div`
  width: 160px;
  margin-right: 10px;
`;
