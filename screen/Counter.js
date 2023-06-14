import React, { useState } from 'react';
import { styled } from 'styled-components/native';
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

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
  width: 48%;
  border-radius: 30px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.selected ? '#dcdde1' : '#718093'};
`;
const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.selected ? 'black' : 'white'};
`;
const CounterBody = styled.View`
  flex: 9;
  border-radius: 30px;
  width: 95%;
  background-color: #dcdde1;
  align-items: center;
  justify-content: center;
`;
const CounterBodyBox = styled.Pressable`
  flex: 6;
  width: 95%;
  align-items: center;
  justify-content: center;
`;
const CounterBodyText = styled.Text`
  font-size: 100px;
`;
const CounterFooter = styled.View`
  flex: 1;
  width: 95%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const AffirmationHeader = styled.View`
  flex: 1;
  border-radius: 30px;
  width: 95%;
  background-color: #718093;
  align-items: center;
  justify-content: center;
  margin-bottom: 3%;
`;
const AffirmationBody = styled.View`
  flex: 8;
  border-radius: 30px;
  width: 95%;
  background-color: #dcdde1;
  align-items: center;
  justify-content: center;
`;
const AffirmationBodyBox = styled.Pressable`
  flex: 6;
  width: 95%;
  align-items: center;
  justify-content: center;
`;
const AffirmationBodyText = styled.Text`
  font-size: 100px;
`;
const AffirmationFooter = styled.View`
  flex: 1;
  width: 95%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function Counter({ navigation: { navigate } }) {
  const [selected, setSelected] = useState(false);
  const [counterNum, setCounterNum] = useState(0);
  return(
    <Container>
      <Header>
        <HeaderBox selected={selected} onPress={() => setSelected(false)}>
          <HeaderText selected={selected}>Counter</HeaderText>
        </HeaderBox>
        <HeaderBox selected={!selected} onPress={() => setSelected(true)}>
          <HeaderText selected={!selected}>Affirmation</HeaderText>
        </HeaderBox>
      </Header>
      {selected === false ? 
        <CounterBody>
          <CounterBodyBox onPress={() => setCounterNum((prev) => prev + 1 )}>
            <CounterBodyText>{counterNum}</CounterBodyText>
          </CounterBodyBox>
          <CounterFooter>
            <Fontisto name="spinner-rotate-forward" size={36} color="black" style={{marginRight:10}} onPress={() => setCounterNum(0)} />
            <AntDesign name="minuscircleo" size={36} color="black" style={{marginLeft:10}} onPress={() => {
              if(counterNum === 0) {
                setCounterNum(0);
              } else {
                setCounterNum((prev) => prev - 1 );
              }
              }} 
            />
          </CounterFooter>
        </CounterBody>
        :
        <>
          <AffirmationHeader>
            <Text style={{fontSize: 20, color:'white'}}>1. Hello world</Text>
          </AffirmationHeader>
          <AffirmationBody>
            <AffirmationBodyBox onPress={() => setCounterNum((prev) => prev + 1 )}>
              <AffirmationBodyText>{counterNum}</AffirmationBodyText>
            </AffirmationBodyBox>
            <AffirmationFooter>
              <Fontisto name="spinner-rotate-forward" size={36} color="black" style={{marginRight:10}} onPress={() => setCounterNum(0)} />
              <AntDesign name="minuscircleo" size={36} color="black" style={{marginLeft:10}} onPress={() => {
                if(counterNum === 0) {
                  setCounterNum(0);
                } else {
                  setCounterNum((prev) => prev - 1 );
                }
                }} 
              />
              <Ionicons name="list-circle-outline" size={46} color="black" style={{marginLeft:10}} onPress={() => navigate('Stack', {screen: 'Write'})} />
            </AffirmationFooter>
          </AffirmationBody>
        </>
      }
    </Container>
  );
}

export default Counter;