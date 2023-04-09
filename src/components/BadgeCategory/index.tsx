import styled from 'styled-components';

type Props = {
  text: string;
};

export function BadgeCategory({ text }: Props) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}

export const Container = styled.div`
  background-color: #d4d4d4;
  border-radius: 10px;
  padding: 7px;
  margin: 0px 5px 5px 5px;
`;

export const Text = styled.h4`
  font-size: 16px;
  color: #8f8f8f;
`;
