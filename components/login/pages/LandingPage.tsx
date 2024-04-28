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
  
// @ts-ignore
function LandingPage({ navigation }): React.JSX.Element {
    const {dark} = useTheme();
    const colors = (dark ? LibruhThemeDark.colors : LibruhThemeLight.colors)
  
    /*const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };*/
  
    return (
      <>
      <ScrollView style={{zIndex: 2}}>
          <Header />
          <View style={{marginHorizontal: 16, marginVertical: 24, paddingLeft: 16, borderRadius:15, backgroundColor: colors.secondaryBg}}>
            <Section title="Co to jest?" style={{borderBottomWidth: 1, borderBottomColor: colors.spacer}}>
              Libruh to zamiennik oficjalnej aplikacji systemu e-dziennika Librus Synergia®.
            </Section>
  
            <Section title="Po co to komu?" style={{borderBottomWidth: 1, borderBottomColor: colors.spacer}}>
              <Text>
                Bo oficjalna aplikacja Librus to beznadziejne gówno, tzw. Webview.
              </Text>
            </Section>
  
            <Section title="Czy to jest bezpieczne?">
              <Text onPress={() => Linking.openURL('https://git.parpok.xyz/bruh-software/libruh')} style={[{textDecorationLine: "underline"}]}>
  
              Nasza aplikacja jest bezpieczna. Kod tej aplikacji jest dosępny publicznie na naszym GitLabie. Możesz do niego przejść klikając w ten napis.
  
              </Text>
            </Section>
          </View>
          <View style={{paddingHorizontal: 16, marginTop: "auto"}}>
                <TouchableOpacity onPress={() => navigation.navigate('registerSelection')} style={{backgroundColor: colors.primary, borderRadius: 15, paddingVertical: 16}} >
                    <Text style={{color: "#fff", textAlign:"center", fontSize: 16, fontWeight: "600"}}>Dalej</Text>
                </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }

export default LandingPage;