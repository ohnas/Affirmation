import React from 'react';
import { Pressable, Text, Dimensions } from "react-native";
import { styled } from 'styled-components/native';
import { useDB } from '../context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Container = styled.View`
  flex: 1;
  background-color: '#f5f6fa';
  align-items: center;
  justify-content: center;
`;

const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${windowWidth}px;
  height: ${Math.floor(windowHeight / 6 * 1)}px;
  padding-left: 2px;
  padding-right: 2px;
`;
const HeaderBox = styled.View`
  border: 2px;
  border-radius: 30px;
  padding: 10px 50px;
`;
const HeaderText = styled.Text`
  font-size: 20px;
`;
const Body = styled.View`
  flex: 4;
  width: ${windowWidth}px;
  height: ${Math.floor(windowHeight / 6 * 4)}px;
  background-color: blue;
`;
const Footer = styled.View`
  flex: 1;
  width: ${windowWidth}px;
  height: ${Math.floor(windowHeight / 6 * 1)}px;
  background-color: green;
`;

function Counter({ navigation: { navigate } }) {
  const db = useDB();
  return(
    <Container>
      <Header>
        <HeaderBox>
          <HeaderText>Counter</HeaderText>
        </HeaderBox>
        <HeaderBox>
          <HeaderText>Affirmation</HeaderText>
        </HeaderBox>
      </Header>
      <Body>
        <Text>Counter</Text>
        <Text>Affirmation</Text>
      </Body>
      <Footer>
        <Pressable onPress={() => navigate('Stack', {screen: 'Write'})}>
          <Text>I'm pressable!</Text>
        </Pressable>
      </Footer>
    </Container>
  );
}

export default Counter;