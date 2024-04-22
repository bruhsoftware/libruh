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

import Header from '../../elements/login/Header';
import Spacer from '../../elements/Spacer';
import Section from '../../elements/login/Section';

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
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
    return (
      <>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <View>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
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
                <TouchableOpacity onPress={() => navigation.navigate('registerSelection')} style={{backgroundColor: '#00aeef', borderRadius: 15, paddingVertical: 15}} >
                    <Text style={{color: "#fff", textAlign:"center", fontSize: 20, fontWeight: "bold"}}>Continue</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{position: "absolute", bottom: 20}}>
            <Text style={{position: "relative", color: "#AAA", textAlign: "center", width: Dimensions.get('window').width}}>! DEVELOPEMENT BUILD - WORK IN PROGRESS !</Text>
        </View>
      </>
    );
  }

export default LandingPage;