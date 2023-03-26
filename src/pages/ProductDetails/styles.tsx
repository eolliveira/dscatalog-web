import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Card = styled.div`
  padding: 20px;
  height: calc(100vh - 96px);
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  h2 {
    margin-left: 15px;
    font: 22px;
    color: #263238;
    text-decoration: none;
  }

  &:hover {
    color: #263238;
  }
`;

export const ProductContainer = styled.div`
  margin: 8px;

  @media (min-width: 1024px) {
    .product-details-product-container {
      margin: 18px;
    }
  }

  @media (min-width: 1024px) {
    .product-details-product-container {
      margin: 18px;
    }
  }

  @media (min-width: 1200px) {
    .product-details-product-container {
      display: flex;
      align-items: unset;
    }
  }
`;

export const ProductData = styled.div`
  margin: 0;
  padding: 0;

  h2 {
    font-size: 27px;
  }

  @media (min-width: 1024px) {
    .product-details-product {
      margin: 0;
      padding: 0;
    }
  }

  @media (min-width: 1024px) {
    .product-details-product {
      margin: 0;
      padding: 0;
    }
  }
`;

export const ProductDescription = styled.div`
  padding: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  margin-top: 30px;

  h3 {
    font-size: 18px;
    color: #9e9e9e;
    margin-bottom: 20px;
  }

  @media (min-width: 1200px) {
    .product-details-description {
      margin: 0;
    }
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 15px;
  margin-right: 50px;

  img {
    max-width: 270px;
    width: 100%;
  }

  @media (min-width: 1200px) {
    .product-details-img {
      margin-right: 50px;
    }

    @media (min-width: 1440px) {
      .product-details-img {
        margin-right: 50px;
      }
    }
  }
`;

export const ProductName = styled.div`
  h2 {
    margin-bottom: 10px;
  }

  @media (min-width: 1024px) {
    .product-details-text {
      margin-right: 50px;
      display: flex;
      justify-content: space-between;
    }
  }

  @media (min-width: 1024px) {
    .product-details-text {
      margin-right: 50px;
      display: flex;
      justify-content: space-between;
    }
  }

  @media (min-width: 1440px) {
    .product-details-text {
      display: flex;
      flex-direction: column;
    }
  }
`;
