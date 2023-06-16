import React from 'react';
import { Text } from "react-native";
import { styled } from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: '#fff';
  align-items: center;
  justify-content: center;
`;

function AffirmationGoal() {
    return(
        <Container><Text>AffirmationGoal</Text></Container>
    );
}

export default AffirmationGoal;