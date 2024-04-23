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
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from '@ui/login/elements/Header';
import Spacer from '@ui/elements/Spacer';
import Section from '@ui/elements/Section';

// not sure if this is safe but i dont care
import { version } from '@package';
import { useTheme } from '@react-navigation/native';
import { LibruhThemeDark, LibruhThemeLight } from '@constants/themes';

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  
// @ts-ignore
function LandingPage({ navigation }): React.JSX.Element {
    const {dark} = useTheme();
    const colors = (dark ? LibruhThemeDark.colors : LibruhThemeLight.colors)
  
    /*const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };*/
  
    return (
      <>
        <View>
          <Header />
          <View
            style={{
              backgroundColor: colors.background,
            }}>
            <Section title="What's this for?">
              Libruh is a replacement app for the Librus® Synergia school register.
            </Section>
  
            <Section title="Why?">
              <Text>
                Because the official Librus® app is a WebView steaming pile of crap.
              </Text>
            </Section>
  
            <Section title="Is it safe?">
              <Text onPress={() => Linking.openURL('https://git.parpok.xyz/bruh-software/libruh')} style={[{textDecorationLine: "underline"}]}>
  
              It's safe. The code for this app is public on our GitLab so you can check it out yourself. You can open the repository by clicking this text.
  
              </Text>
            </Section>
  
            <Spacer size={50} />
            {/* Alert.alert("Login doesn't work rn.") */}
            {/*<Button  onPress={() => navigation.navigate('registerSelection')} title="Proceed" accessibilityLabel="Next"/>*/}
            <View style={{paddingHorizontal: 24}}>
                <TouchableOpacity onPress={() => navigation.navigate('registerSelection')} style={{backgroundColor: colors.primary, borderRadius: 15, paddingVertical: 15}} >
                    <Text style={{color: "#fff", textAlign:"center", fontSize: 20, fontWeight: "600"}}>Proceed</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{position: "relative", bottom: -45}}>
            <Text style={{position: "relative", color: "#999", textAlign: "center", paddingHorizontal: 24, width: Dimensions.get('window').width}}>DEV -  v{version}</Text>
            <Text style={{position: "relative", color: "#666", textAlign: "center", fontSize: 11, width: Dimensions.get('window').width, paddingHorizontal: 24}}>All trademarks used in this app remain the property of their rightful owners and are used for informational purposes only.</Text>
        </View>
      </>
    );
  }

export default LandingPage;