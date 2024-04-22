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

import Header from '../../elements/Header';
import Spacer from '../../elements/Spacer';

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

type SectionProps = PropsWithChildren<{
    title: string;
  }>;
  
  function Section({children, title}: SectionProps): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  }
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
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Whats that">
              A better app for Librus Synergia school register.
            </Section>
  
            <Section title="But why">
              <Text>
                Because the official app is hot rubbish
              </Text>
            </Section>
  
            <Section title="Is it safe">
              <Text onPress={() => Linking.openURL('https://git.parpok.xyz/bruh-software/libruh')}>
  
              It's safe. Code for this app is public on our GitLab so you can check it out yourself. Also you already used sketchy third party apps so why not this one?
  
              </Text>
            </Section>
  
            <Spacer size={50} />
            {/* Alert.alert("Login doesn't work rn.") */}
            <Button  onPress={() => navigation.navigate('registerSelection')} title="next" accessibilityLabel="Next"/>
          </View>
        </ScrollView>
      </>
    );
  }

export default LandingPage;