import React, { useState } from 'react';
import { styled } from 'styled-components/native';
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { useDB } from '../context';

const Container = styled.View`
  flex: 1;
  background-color: #f5f6fa;
  align-items: center;
  justify-content: center;
  padding-top: 10%;
  padding-bottom: 5%;
`;

const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`;
const HeaderBox = styled.Pressable`
  border: 2px;
  border-radius: 30px;
  padding: 10px 45px;
  background-color: #dcdde1;
`;
const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.selected ? 'black' : 'white'};
`;
const Body = styled.View`
  flex: 9;
  border: 2px;
  border-radius: 30px;
  width: 95%;
  background-color: #dcdde1;
  align-items: center;
  justify-content: center;
`;
const BodyBox = styled.Pressable`
  flex: 6;
  width: 95%;
  align-items: center;
  justify-content: center;
`;
const BodyText = styled.Text`
  font-size: 100px;
`;
const Footer = styled.View`
  flex: 1;
  width: 95%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function Counter({ navigation: { navigate } }) {
  const db = useDB();
  const [selected, setSelected] = useState(false);
  const [counterNum, setCounterNum] = useState(0);
  return(
    <Container>
      <Header>
        <HeaderBox onPress={() => setSelected(false)}>
          <HeaderText selected={selected}>Counter</HeaderText>
        </HeaderBox>
        <HeaderBox onPress={() => setSelected(true)}>
          <HeaderText selected={!selected}>Affirmation</HeaderText>
        </HeaderBox>
      </Header>
      <Body>
        <BodyBox onPress={() => setCounterNum((prev) => prev + 1 )}>
          <BodyText>{counterNum}</BodyText>
        </BodyBox>
        <Footer>
          <Fontisto name="spinner-rotate-forward" size={36} color="black" style={{marginRight:10}} onPress={() => setCounterNum(0)} />
          <AntDesign name="minuscircleo" size={36} color="black" style={{marginLeft:10}} onPress={() => {
            if(counterNum === 0) {
              setCounterNum(0);
            } else {
              setCounterNum((prev) => prev - 1 );
            }
            }} 
          />
        </Footer>
      </Body>
    </Container>
  );
}

export default Counter;