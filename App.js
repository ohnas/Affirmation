import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import Realm from 'realm';
import Root from './navigation/Root';
import { DBContext } from "./context";

// Define your object model
class Affirmation extends Realm.Object {
  static schema = {
    name: 'Affirmation',
    properties: {
      _id: 'int',
      message: 'string',
      goal: 'int',
      datas: 'Data[]',
    },
    primaryKey: '_id',
  };
}

class Data extends Realm.Object {
  static schema = {
    name: 'Data',
    properties: {
      _id: 'int',
      date: 'date',
      success: {type: 'bool', default: false},
    },
    primaryKey: '_id',
  };
}

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [realm, setRealm] = useState(null);
  async function prepare() {
    try {
      const connection = await Realm.open({
        path: "realmDB",
        schema: [Affirmation, Data],
        deleteRealmIfMigrationNeeded: true,
      });
      setRealm(connection);
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
    <DBContext.Provider value={realm}>
      <NavigationContainer>
          <Root />
          <StatusBar style="auto" />
      </NavigationContainer>
    </DBContext.Provider>
  );
}
