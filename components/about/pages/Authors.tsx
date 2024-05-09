import {useTheme} from '@react-navigation/native';
import Section from '@ui/elements/Section';
import {LibruhThemeDark, LibruhThemeLight} from '@constants/themes';
import React from 'react';
import {
  Button,
  Image,
  Linking,
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Spacer from '@ui/elements/Spacer';

function Authors({navigation}) {
  const {dark} = useTheme();
  const colors = dark ? LibruhThemeDark.colors : LibruhThemeLight.colors;

  return (
    <ScrollView>
      <View style={{paddingHorizontal: 16}}>
        <Section
          title="Libruh"
          style={{
            color: colors.text,
            paddingVertical: 16,
            paddingRight: 24,
            borderBottomWidth: 0,
            borderBottomColor: colors.spacer,
          }}>
          Został stworzony dzięki:
        </Section>

        <View
          style={{
            paddingLeft: 16,
            borderRadius: 15,
            backgroundColor: colors.secondaryBg,
          }}>
          <TouchableOpacity
            style={{
              paddingVertical: 12,
              paddingRight: 24,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              Linking.openURL('https://parpok.xyz');
            }}>
            <Image
              source={require('@assets/icons/icon-authors.png')}
              style={{
                width: 26,
                height: 26,
                marginRight: 10,
                borderRadius: 5,
              }}></Image>
            <Text style={{color: colors.text, fontSize: 16, fontWeight: '600'}}>
              Parpok
            </Text>
            <View
              style={{
                marginLeft: 'auto',
                marginRight: -10,
                justifyContent: 'center',
              }}>
              {
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color={colors.label}
                />
              }
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              paddingVertical: 12,
              paddingRight: 24,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              Linking.openURL('https://tanu.lol');
            }}>
            <Image
              source={require('@assets/icons/icon-authors.png')}
              style={{
                width: 26,
                height: 26,
                marginRight: 10,
                borderRadius: 5,
              }}></Image>
            <Text style={{color: colors.text, fontSize: 16, fontWeight: '600'}}>
              Tanu
            </Text>
            <View
              style={{
                marginLeft: 'auto',
                marginRight: -10,
                justifyContent: 'center',
              }}>
              {
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color={colors.label}
                />
              }
            </View>
          </TouchableOpacity>
        </View>

        <Spacer size={15}></Spacer>

        <View
          style={{
            paddingLeft: 16,
            backgroundColor: colors.secondaryBg,
          }}>
          <TouchableOpacity
            style={{
              paddingVertical: 12,
              paddingRight: 24,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              Linking.openURL(
                'https://git.parpok.xyz/bruh-software/libruh/-/project_members',
              );
            }}>
            <Image
              source={require('@assets/icons/icon-authors.png')}
              style={{
                width: 26,
                height: 26,
                marginRight: 10,
                borderRadius: 5,
              }}></Image>
            <Text style={{color: colors.text, fontSize: 16, fontWeight: '600'}}>
              Inni współtwórcy
            </Text>
            <View
              style={{
                marginLeft: 'auto',
                marginRight: -10,
                justifyContent: 'center',
              }}>
              {
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color={colors.label}
                />
              }
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Authors;
