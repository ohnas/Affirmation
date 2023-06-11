import React from 'react';
import { Pressable, Text } from "react-native";
import { styled } from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: '#fff';
  align-items: center;
  justify-content: center;
`;

function Counter({ navigation: { navigate } }) {
    return(
      <Container>
        <Text>Counter</Text>
        <Pressable onPress={() => navigate('Stack', {screen: 'Write'})}>
          <Text>I'm pressable!</Text>
        </Pressable>
      </Container>
    );
}

export default Counter;