import { Route, Switch } from 'react-router-dom';
import ProductCrudCard from '../../../../components/ProductCrudCard';
import Button from '../../../../components/Button';
import styled from 'styled-components';

export function List() {
  const product = {
    id: 2,
    name: 'Smart TV',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 2190.0,
    imgUrl:
      'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg',
    date: '2020-07-14T10:00:00Z',
    categories: [
      {
        id: 1,
        name: 'Livros',
        products: [],
      },
      {
        id: 3,
        name: 'Computadores',
        products: [],
      },
    ],
  };

  return (
    <Wrapper>
      <HeaderContainer>
        <Button maxWidth={170} text={'Adicionar'} />
        <FilterContainer className="base-card">filtro</FilterContainer>
      </HeaderContainer>
      <span className='row'>
        <span className='col-sm-6 col-md-12'>
        <ProductCrudCard product={product} />
        </span>
        <span className='col-sm-6 col-md-12'>
        <ProductCrudCard product={product} />
        </span>
        <span className='col-sm-6 col-md-12'>
        <ProductCrudCard product={product} />
        </span>
        <span className='col-sm-6 col-md-12'>
        <ProductCrudCard product={product} />
        </span>
      </span>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  padding: 20px;
`;

export const FilterContainer = styled.div`
  padding: 10px;
  height: 50px;
  margin: 20px 0px;
  //margin-bottom: 20px;
  @media (min-width: 768px) {
    flex: 1;
    margin: 0px 0px 0px 20px;
    //margin-left: 20px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
