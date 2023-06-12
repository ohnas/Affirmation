import React from 'react';
import { styled } from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #f5f6fa;
  align-items: center;
  justify-content: center;
`;
const TitleBox = styled.View``;
const TitleText = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

function Write() {
  return(
    <Container>
      <TitleBox>
        <TitleText>Affirmation List</TitleText>
      </TitleBox>
    </Container>
  );
}

export default Write;