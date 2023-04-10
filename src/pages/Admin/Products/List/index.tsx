import { Link, Route, Switch } from 'react-router-dom';
import ProductCrudCard from '../../../../components/ProductCrudCard';
import Button from '../../../../components/Button';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../../../../http/requests';
import { Product } from '../../../../types/Product';
import { SpringPage } from '../../../../types/vendor/spring';

export function List() {
  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      //data = corpo da req
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <Wrapper>
      <HeaderContainer>
        <Link to={'/admin/products/create'}>
          <Button maxWidth={170} text={'Adicionar'} />
        </Link>

        <FilterContainer className="base-card">filtro</FilterContainer>
      </HeaderContainer>
      <span className="row">
        {page?.content.map((product) => (
          <span className="col-sm-6 col-md-12">
            <ProductCrudCard product={product} />
          </span>
        ))}
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
