import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components/native';
import { Alert, Text, Dimensions } from 'react-native';
import { DBContext, Affirmation } from '../context';

const windowWidth = Dimensions.get('window').width;

const Container = styled.View`
  flex: 1;
  background-color: #f5f6fa;
  align-items: center;
  justify-content: center;
`;
const TitleBox = styled.View`
  flex: 1;
  width: ${windowWidth * 0.95}px;
  align-items: center;
  justify-content: center;
`;
const TitleText = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;
const TempDelBtn = styled.Button``;
const InputBox = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${windowWidth * 0.95}px;
`;
const MessageInput = styled.TextInput`
  flex: 3;
  border-bottom-width: 2px;
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  margin-right: 5px;
`;
const GoalInput = styled.TextInput`
  flex: 1;
  border-bottom-width: 2px;
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  margin-left: 5px;
`;
const AffirmaitonList = styled.ScrollView`
  flex: 8;
  border: 2px;
  width: ${windowWidth * 0.95}px;
`;

function Write() {
  const { useRealm, useQuery } = DBContext;
  const realmDB = useRealm();
  const affirmationDatas = useQuery(Affirmation);
  const [message, setMessage] = useState("");
  const [goal, setGoal] = useState("");
  const [maxId, setMaxId] = useState(null);
  const onChangeMessage = (text) => setMessage(text);
  const onChangeGoal = (num) => setGoal(num);
  // const onSubmit = () => {
  //   if (message === "" || goal == "") {
  //     return Alert.alert("Please complete form.");
  //   } else {
  //     realmDB.write(() => {
  //       realmDB.create("Affirmation", {
  //         _id: 0,
  //         message: message,
  //         goal: Number(goal),
  //       });
  //     });
  //   }
  // };
  console.log(affirmationDatas);
  function getMaxId() {
    let idList = [];
    affirmationDatas.map((affirmationData) => 
      idList.push(affirmationData._id)
    )
    setMaxId(Math.max(...idList));
  }
  console.log(maxId);
  const deleteAllData = () => {
    realmDB.write(() => {
      realmDB.deleteAll();
    });
  };
  useEffect(() => {
    if(affirmationDatas.length === 0) {
      setMaxId(0);
    } else {
      getMaxId();
    }
  }, [affirmationDatas]);
  return(
    <Container>
      <TitleBox>
        <TitleText>Affirmation List</TitleText>
        <TempDelBtn title='Delete all data' onPress={deleteAllData} />
      </TitleBox>
      <InputBox>
        <MessageInput  
          placeholder='Affirmaiton'
          placeholderTextColor='#8395a7'
          onChangeText={onChangeMessage}
          value={message} 
          returnKeyType='done'
        />
        <GoalInput 
          placeholder='Goal' 
          placeholderTextColor='#8395a7'
          onChangeText={onChangeGoal}
          value={goal}
          keyboardType='number-pad'
          returnKeyType='done'
          // onSubmitEditing={onSubmit}
        />
      </InputBox>
      <AffirmaitonList>
        <Text>scrollview</Text>
      </AffirmaitonList>
    </Container>
  );
}

export default Write;