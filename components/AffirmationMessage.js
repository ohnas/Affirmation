import React from 'react';
import { Text } from "react-native";
import { styled } from 'styled-components/native';

const Container = styled.View``;

function AffirmationMessage({ message }) {
    return(
        <Container><Text>{message}</Text></Container>
    );
}

export default AffirmationMessage;