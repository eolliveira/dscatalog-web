import styled from 'styled-components';

export const ProductContainer = styled.div`
  margin: 10px;
  min-height: 300px;

  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
  }
`;

export const CardImage = styled.div`
  text-align: center;
  border-bottom: 1px solid #e1e1e1;

  img {
    width: 140px;
    height: 140px;
    margin: 15px;
  }
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
`;

export const CardCategory = styled.div`
  display: flex;
  padding: 5px;
  flex-wrap: wrap;
`;
