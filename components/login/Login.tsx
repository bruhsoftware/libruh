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

import Header from '@ui/login/elements/Header';
import Spacer from '@ui/elements/Spacer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '@ui/login/pages/LandingPage';
import SelectRegister from '@ui/login/pages/SelectRegister';
import SynergiaLogin from '@ui/login/modals/SynergiaLogin';
import { useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';
import Main from '@ui';
import SynergiaLoginEasterEgg from '@ui/login/modals/SynergiaLoginEasterEgg';
import AboutApp from '@ui/about/pages/AboutApp';
import VersionsModal from '@ui/about/modals/VersionsModal';
import Acknowledgements from '@ui/about/pages/Acknowledgements';

const Stack = createStackNavigator();

function Login() {
  const scheme = useColorScheme();
  const navigation = useNavigation();
  return (
    <>
        <Stack.Navigator initialRouteName="home">
          <Stack.Group>
            <Stack.Screen name="home" component={LandingPage} options={{headerTitle: "Główna", headerShown: false}}/>
            <Stack.Screen name="registerSelection" component={SelectRegister} options={{headerTitle: "Dzienniki"}}/>
            <Stack.Screen name="aboutApp" component={AboutApp} options={{headerTitle: "O programie"}}/>
            <Stack.Screen name="acknowledgements" component={Acknowledgements} options={{headerTitle: "Wykorzystane biblioteki"}}/>
          </Stack.Group>
          <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="versionsModal" component={VersionsModal} options={{headerTitle: "Wersje"}}/>
            <Stack.Screen name="synergiaLogin" component={SynergiaLogin} options={{headerTitle: "Zaloguj się"}}/>
            <Stack.Screen name="synergiaEasterEgg" component={SynergiaLoginEasterEgg} options={{headerTitle: ":3"}}/>
          </Stack.Group>
        </Stack.Navigator>
    </>
  );
}

export default Login;
