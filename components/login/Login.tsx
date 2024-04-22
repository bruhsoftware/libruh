/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Linking,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from '../elements/Header';
import Spacer from '../elements/Spacer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './pages/LandingPage';
import SelectRegister from './pages/SelectRegister';
import SynergiaLogin from './pages/SynergiaLogin';

const Stack = createNativeStackNavigator();

function Login() {
  const scheme = useColorScheme();
  return (
    <>
        <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            barStyle={scheme === 'dark' ? "light-content" : "dark-content"}
        />
        <Stack.Navigator initialRouteName="home">
          <Stack.Group>
            <Stack.Screen name="home" component={LandingPage} options={{headerShown: false}}/>
            <Stack.Screen name="registerSelection" component={SelectRegister}/>
            <Stack.Screen name="synergiaLogin" component={SynergiaLogin} options={{ presentation: 'modal' }}/>
          </Stack.Group>
        </Stack.Navigator>
    </>
  );
}

export default Login;
