import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import Root from './navigation/Root';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  async function prepare() {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      // Tell the application to render
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
  };  
  useEffect(() => {
    prepare();
  }, [])

  if (!appIsReady) {
    return null;
  }
  
  return (
    <NavigationContainer>
        <Root />
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}
