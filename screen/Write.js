import React, { useState } from 'react';
import { styled } from 'styled-components/native';
// import { useDB } from '../context';
import { Alert, Text } from 'react-native';
import { DBContext, Affirmation } from '../context';

const Container = styled.View`
  flex: 1;
  background-color: #f5f6fa;
  align-items: center;
  justify-content: center;
`;
const TitleBox = styled.View`
  flex: 1;
  width: 95%;
  align-items: center;
  justify-content: center;
`;
const TitleText = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;
const InputBox = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`;
const MessageInput = styled.TextInput`
  border-bottom-width: 2px;
  width: 68%;
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
`;
const GoalInput = styled.TextInput`
  border-bottom-width: 2px;
  width: 28%;
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
`;
const AffirmaitonList = styled.View`
  flex: 8;
  width: 95%;
  border: 2px;
`;

function Write() {
  const { useObject } = DBContext;
  const [message, setMessage] = useState("");
  const [goal, setGoal] = useState("");
  const onChangeMessage = (text) => setMessage(text);
  const onChangeGoal = (num) => setGoal(num);
  // const onSubmit = () => {
  //   if (message === "" || goal == "") {
  //     return Alert.alert("Please complete form.");
  //   } else {
  //     realmDB.write(() => {
  //       realmDB.create("Affirmation", {
  //         message: message,
  //         goal: Number(goal),
  //       });
  //     });
  //   }
  // };
  // console.log(realmDB);
  // const myTask = useObject(Affirmation, 0);
  // console.log(myTask);
  return(
    <Container>
      <TitleBox>
        <TitleText>Affirmation List</TitleText>
      </TitleBox>
      <InputBox>
        <MessageInput 
          placeholder='Affirmaiton'
          placeholderTextColor='#8395a7'
          onChangeText={onChangeMessage}
          value={message} 
          inputMode='text'
          returnKeyType='done'
        />
        <GoalInput 
          placeholder='Goal' 
          placeholderTextColor='#8395a7'
          onChangeText={onChangeGoal}
          value={goal} 
          inputMode='numeric'
          returnKeyType='done'
          // onSubmitEditing={onSubmit}
        />
      </InputBox>
      <AffirmaitonList>
        <Text>FlatList</Text>
      </AffirmaitonList>
    </Container>
  );
}

export default Write;