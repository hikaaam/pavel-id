
import React from 'react';
import {  Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './navigation/stackNavigator';
import { firebaseConfig } from "./firebase/config";
import * as firebase from 'firebase';
export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp({});
 }else {
    firebase.app(); // if already initialized, use that one
 }
  return (

    <NavigationContainer>
        <Stack.Navigator />
    </NavigationContainer>

  );
}

