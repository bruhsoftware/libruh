/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { registerRootComponent } from 'expo';

// Use Expo
// AppRegistry.registerComponent(appName, () => App);
registerRootComponent(App);
