import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import Root from './navigation/Root';

// Define your object model
class Affirmation extends Realm.Object {
  static schema = {
    name: 'Affirmation',
    properties: {
      _id: 'objectId',
      message: 'string',
      goal: 'int',
    },
    primaryKey: '_id',
  };
}

class Test extends Realm.Object {
  static schema = {
    name: 'Test',
    properties: {
      _id: 'objectId',
      message: 'string',
    },
    primaryKey: '_id',
  };
}
// Create a configuration object
const realmConfig = {
  schema: [Affirmation, Test],
};
// Create a realm context
const { RealmProvider, useRealm, useObject, useQuery } = createRealmContext(realmConfig);

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
    <RealmProvider>
      <NavigationContainer>
          <Root />
          <StatusBar style="auto" />
      </NavigationContainer>
    </RealmProvider>
  );
}
