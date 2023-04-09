import styled from 'styled-components';

type ContainerProps = {
  maxWidth?: number;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;

  @media (min-width: 768px) {
    max-width: ${(props) => props.maxWidth}px;
  }
`;

export const ButtonText = styled.div`
  h6 {
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
  }

  width: 100%;
  display: flex;
  align-items: center;

  border-radius: 10px;

  justify-content: center;

  &:hover {
    color: white;
  }

  @media (min-width: 576px) {
    h6 {
      font-size: 18px;
    }
  }
`;

// export const ButtonImage = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 50px;
//   height: 50px;
//   background: rgb(19, 83, 202);
//   border-radius: 0px 10px 10px 0px;

//   @media (min-width: 576px) {
//     width: 60px;
//     height: 60px;
//   }
// `;
