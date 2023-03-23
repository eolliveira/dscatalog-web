import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  font-size: 12px;
  border-radius: 10px 0px 0px 10px;
  text-transform: uppercase;
  font-weight: bold;
  justify-content: center;

  &:hover {
    color: white;
  }

  h6 {
    font-size: 12px;
  }

  @media (min-width: 576px) {
    h6 {
      font-size: 18px;
    }
  }
`;

export const ButtonImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgb(19, 83, 202);
  border-radius: 0px 10px 10px 0px;

  @media (min-width: 576px) {
    width: 60px;
    height: 60px;
  }
`;

