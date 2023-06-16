import React from 'react';
import { Text } from "react-native";
import { styled } from 'styled-components/native';

const Container = styled.View``;

function AffirmationGoal({ goal }) {
    return(
        <Container><Text>{goal}</Text></Container>
    );
}

export default AffirmationGoal;