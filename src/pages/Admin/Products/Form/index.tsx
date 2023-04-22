import styled from 'styled-components';
import { Container } from '../../../ProductDetails/styles';
import { Product } from '../../../../types/Product';
import { Controller, useForm } from 'react-hook-form';
import { requestBackend } from '../../../../http/requests';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';
import { Category } from '../../../../types/Category';
import CurrencyInput from 'react-currency-input-field';

export function Form() {
  const history = useHistory();

  type urlParams = {
    productId: string;
  };

  const { productId } = useParams<urlParams>();
  const [categories, setCategories] = useState<Category[]>([]);

  const isEditing = productId !== 'create';

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<Product>();

  useEffect(() => {
    requestBackend({ url: `/categories` }).then((response) => {
      setCategories(response.data.content);
    });
  }, []);

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/products/${productId}` }).then((response) => {
        const product = response.data as Product;
        setValue('name', product.name);
        setValue('price', product.price);
        setValue('description', product.description);
        setValue('imgUrl', product.imgUrl);
        setValue('categories', product.categories);
      });
    }
  }, [isEditing, productId, setValue]);

  const onSubmit = (formData: Product) => {
    const data = {
      ...formData,
      price: String(formData.price).replace(',', '.'),
    };

    const params: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/products/${productId}` : '/products',
      data,
      withCredentials: true,
    };

    requestBackend(params).then(() => {
      history.push('/admin/products');
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
              {errors.categories && (
                <div className="invalid-feedback d-block mb-1 ">
                  Campo requerido
                </div>
              )}
              <Controller
                name="categories"
                rules={{ required: true }}
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={categories}
                    classNamePrefix={'product-crud-select'}
                    isMulti
                    getOptionLabel={(category: Category) => category.name}
                    getOptionValue={(category: Category) => String(category.id)}
                  />
                )}
              />

              <div className="invalid-feedback d-block mb-1 ">
                {errors.price?.message}
              </div>
              <Controller
                name="price"
                rules={{ required: 'Campo requerido' }}
                control={control}
                render={({ field }) => (
                  <CurrencyInput
                    placeholder="Preço"
                    className="form-control base-input mb-3 mt-3"
                    disableGroupSeparators={true}
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                )}
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
            <ButtonAdd className="btn btn-outline-secondary">SALVAR</ButtonAdd>
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

export const CustomSelect = styled(Select)`
  border-radius: 10px;
  font-size: 1em;
  letter-spacing: -0.015em;
  color: #263238;
  height: 50px;
`;
