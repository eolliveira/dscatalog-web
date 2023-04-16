import styled from 'styled-components';

export const ProductContainer = styled.div`
  margin: 10px 0;
  min-height: 300px;

  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    min-height: 0px;
  }
`;

export const CardImage = styled.div`
min-height: 140px;
  text-align: center;
  border-bottom: 1px solid #e1e1e1;

  img {
    width: 140px;
    height: 140px;
    margin: 15px;
  }
`;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardName = styled.div`
  padding: 15px 40px 10px 20px;

  h6 {
    max-width: 140px;
    font-weight: bold;
    font-size: 1em;
    color: #263238;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    h6 {
      margin: 10px 0 0 0;
    }
  }
`;

export const CardCategory = styled.div`
  display: flex;
  padding: 5px;
  flex-wrap: wrap;


`;

export const CardButtons = styled.div`
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const ButtonUpdate = styled.div`
  width: 165px;
`;

export const ButtonRemove = styled.div`
  width: 165px;
  margin-right: 10px;
`;
