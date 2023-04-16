import styled from 'styled-components';
import { Container } from '../../../ProductDetails/styles';
import { Product } from '../../../../types/Product';
import { useForm } from 'react-hook-form';
import { requestBackend } from '../../../../http/requests';
import { config } from 'process';
import { AxiosRequestConfig } from 'axios';
import { useHistory } from 'react-router-dom';

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const history = useHistory();

  const onSubmit = (formData: Product) => {
    const data = {
      ...formData,
      categories: [
        {
          id: 1,
          name: 'description',
        },
      ],
    };

    const params: AxiosRequestConfig = {
      method: 'POST',
      url: '/products',
      data,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      console.log(response.data);
    });
  };

  const handleCancel = () => {
    history.push('/admin/products');
  };

  return (
    <Wrapper>
      <Container className="base-card">
        <Title>DADOS DO PRODUTO</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-6">
              <div className="invalid-feedback d-block mb-1 ">
                {errors.name?.message}
              </div>
              <input
                {...register('name', {
                  required: 'Campo requerido',
                })}
                type="text"
                className={`form-control base-input mb-3 ${
                  errors.name ? 'is-invalid' : ''
                }`}
                placeholder="Nome do produto"
                name="name"
              />

              <div className="invalid-feedback d-block mb-1 ">
                {errors.categories?.message}
              </div>
              <input
                {...register('categories', {
                  required: 'Campo requerido',
                })}
                type="text"
                className={`form-control base-input mb-3 ${
                  errors.categories ? 'is-invalid' : ''
                }`}
                placeholder="Categorias"
                name="categories"
              />

              <div className="invalid-feedback d-block mb-1 ">
                {errors.price?.message}
              </div>
              <input
                {...register('price', {
                  required: 'Campo requerido',
                })}
                type="number"
                className={`form-control base-input mb-3 ${
                  errors.price ? 'is-invalid' : ''
                }`}
                placeholder="Preço"
                name="price"
              />
            </div>
            <div className="col-lg-6">
              <div className="invalid-feedback d-block mb-1 ">
                {errors.description?.message}
              </div>
              <textarea
                cols={37}
                rows={10}
                {...register('description', {
                  required: 'Campo requerido',
                })}
                className={`form-control base-input h-auto mb-3 ${
                  errors.price ? 'is-invalid' : ''
                }`}
                placeholder="Descrição"
                name="description"
              />
            </div>
          </div>
          <ButtonsContainer>
            <ButtonCancel
              onClick={handleCancel}
              className="btn btn-outline-danger"
            >
              CANCELAR
            </ButtonCancel>
            <ButtonAdd className="btn btn-outline-secondary">
              CADASTRAR
            </ButtonAdd>
          </ButtonsContainer>
        </form>
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

export const ButtonAdd = styled.button`
  width: 160px;
`;

export const ButtonCancel = styled.button`
  width: 160px;
  margin-right: 10px;
`;
