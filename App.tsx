/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StatusBar, Text, View, useColorScheme } from 'react-native';
import type {StatusBarStyle} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';


import Ionicons from '@expo/vector-icons/Ionicons';
import Main from '@ui';
import LoginMain from '@ui/login';
import { LibruhThemeDark, LibruhThemeLight } from '@constants/themes';

// @ts-ignore
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

// @ts-ignore
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const LoginStack = createNativeStackNavigator();

function App() {
  /*storage.load({
    key: 'loginCredentials',
  }).then(data => {
    // credentials were found
    return (
      <p style={{backgroundColor: 'red'}}>a</p>
    )
  }).catch(err => {
    // no credentials were found
    return (
      <p style={{backgroundColor: 'blue'}}>b</p>
    )
  })*/
  //const scheme = useColorScheme();
  let scheme = 'light'
  return (
    <>
    <NavigationContainer theme={scheme === 'dark' ? LibruhThemeDark : LibruhThemeLight }>
      <StatusBar barStyle={scheme === 'dark' ? "light-content" : "dark-content"} animated={true}/>
      <LoginMain/>
    </NavigationContainer>
    </>
  )
}

export default App;