
import React from 'react';
import {  Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './navigation/stackNavigator';

export default function App() {
  return (

    <NavigationContainer>
        <Stack.Navigator />
    </NavigationContainer>

  );
}

