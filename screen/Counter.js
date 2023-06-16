import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components/native';
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Text, Dimensions, Alert } from 'react-native';
import { DBContext, Affirmation } from '../context';

const windowWidth = Dimensions.get('window').width;

const Container = styled.View`
  flex: 1;
  background-color: #f5f6fa;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 10px;
`;
const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${windowWidth * 0.95}px;
`;
const HeaderBox = styled.Pressable`
  flex: 1;
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
  width: ${windowWidth * 0.95}px;
  border-radius: 30px;
  background-color: #dcdde1;
  align-items: center;
  justify-content: center;
`;
const CounterBodyBox = styled.Pressable`
  flex: 6;
  align-items: center;
  justify-content: center;
`;
const CounterBodyText = styled.Text`
  font-size: 100px;
`;
const CounterFooter = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const AffirmationHeader = styled.View`
  flex: 1;
  width: ${windowWidth * 0.95}px;
  border-radius: 30px;
  background-color: #718093;
  align-items: center;
  justify-content: center;
  margin-bottom: 13px;
`;
const AffirmationBody = styled.View`
  flex: 8;
  border-radius: 30px;
  width: ${windowWidth * 0.95}px;
  background-color: #dcdde1;
  align-items: center;
  justify-content: center;
`;
const AffirmationBodyBox = styled.Pressable`
  flex: 6;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const AffirmationBodyText = styled.Text`
  font-size: 100px;
`;
const AffirmationFooter = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function Counter({ navigation: { navigate } }) {
  const { useRealm, useQuery } = DBContext;
  const realmDB = useRealm();
  const affirmationDatas = useQuery(Affirmation);
  const ids = affirmationDatas.map((obj) => obj._id);
  console.log(affirmationDatas);
  console.log(ids);
  const [selected, setSelected] = useState(false);
  const [counterNum, setCounterNum] = useState(0);
  const [affirmationNum, setAffirmationNum] = useState(0);
  const firstData = affirmationDatas[0];
  // function handleAffirmationData() {
  //   realmDB.write(() => {
  //     firstData['datas'].push({
  //       date: new Date,
  //       success: true,
  //     });
  //   });
  // }
  useEffect(() => {
    if(affirmationNum === firstData.goal) {
      console.log('save?')
      // handleAffirmationData();
    } else {
      console.log(affirmationNum);
    }
  }, [affirmationNum]);
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
            {affirmationDatas.length === 0 ? 
              <Text style={{fontSize: 20, color:'white'}}>No data.</Text>
              :
              <Text style={{fontSize: 20, color:'white'}}>{affirmationDatas[0].message}</Text>
            }
          </AffirmationHeader>
          <AffirmationBody>
            <AffirmationBodyBox onPress={() => setAffirmationNum((prev) => prev + 1 )}>
              <AffirmationBodyText>{counterNum}</AffirmationBodyText>
              <AffirmationBodyText>/</AffirmationBodyText>
              {affirmationDatas.length === 0 ? 
                <AffirmationBodyText>Goal</AffirmationBodyText>
                :
                <AffirmationBodyText>{affirmationDatas[0].goal}</AffirmationBodyText>
              }
            </AffirmationBodyBox>
            <AffirmationFooter>
              <Fontisto name="spinner-rotate-forward" size={36} color="black" style={{marginRight:10}} onPress={() => setAffirmationNum(0)} />
              <AntDesign name="minuscircleo" size={36} color="black" style={{marginLeft:10}} onPress={() => {
                if(affirmationNum === 0) {
                  setAffirmationNum(0);
                } else {
                  setAffirmationNum((prev) => prev - 1 );
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