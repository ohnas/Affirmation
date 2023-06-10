import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './navigation/Root';

export default function App() {
  return (
    <NavigationContainer>
      <Root />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
