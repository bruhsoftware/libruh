/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StatusBar, Text, View, useColorScheme } from 'react-native';
import type {StatusBarStyle} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Ionicons from '@expo/vector-icons/Ionicons';

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: 1000 * 3600,

  // cache data in the memory. default is true.
  enableCache: true,
});

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

function Main() {
  const scheme = useColorScheme();
  return (
    <>
        <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            barStyle={scheme === 'dark' ? "light-content" : "dark-content"}
        />
        <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:({color, size}) => (<Ionicons name={"home"} color={color} size={size}/>)}}/>
            <Tab.Screen name="Details" component={DetailsScreen}  options={{tabBarIcon:({color, size}) => (<Ionicons name={"apps"} color={color} size={size}/>)}}/>
        </Tab.Navigator>
    </>
  );
}

export default Main;