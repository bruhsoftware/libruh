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

import Header from '../elements/login/Header';
import Spacer from '../elements/Spacer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './pages/LandingPage';
import SelectRegister from './pages/SelectRegister';
import SynergiaLogin from './modals/SynergiaLogin';
import { useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';
import Main from '../ui/Main';
import SynergiaLoginEasterEgg from './modals/SynergiaLoginEasterEgg';

const Stack = createStackNavigator();

function Login() {
  const scheme = useColorScheme();
  const navigation = useNavigation();
  return (
    <>
        <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            barStyle={scheme === 'dark' ? "light-content" : "dark-content"}
        />
        <Stack.Navigator initialRouteName="home">
          <Stack.Group>
            <Stack.Screen name="home" component={LandingPage} options={{headerTitle: "Landing", headerShown: false}}/>
            <Stack.Screen name="registerSelection" component={SelectRegister} options={{headerTitle: "E-register Selection"}}/>
          </Stack.Group>
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name="synergiaLogin" component={SynergiaLogin} options={{headerTitle: "Librus® Synergia - Log in"}}/>
            <Stack.Screen name="synergiaEasterEgg" component={SynergiaLoginEasterEgg} options={{headerTitle: ":3"}}/>
          </Stack.Group>
        </Stack.Navigator>
    </>
  );
}

export default Login;
