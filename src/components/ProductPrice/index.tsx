import styled from 'styled-components';
import { formatPrice } from '../../util/formatters';
type Props = {
  price: number;
};

const ProductPrice = ({ price }: Props) => {
  return (
    <PriceContainer>
      <Coin>R$</Coin>
      <Price>{formatPrice(price)}</Price>
    </PriceContainer>
  );
};

export default ProductPrice;

export const PriceContainer = styled.div`
  display: flex;
`;

export const Coin = styled.p`
  margin: 6px 8px 0px 0px;
  color: #9e9e9e;
  font-size: 1em;
`;

export const Price = styled.p`
  color: #407bff;
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
`;
