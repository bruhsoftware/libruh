/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import type {ReactNode} from 'react';

import {ImageBackground, Text, StyleSheet, View, Image} from 'react-native';
import {useColorScheme} from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { LibruhThemeDark, LibruhThemeLight } from '@constants/themes';

const Header = (): ReactNode => {
  const {dark} = useTheme();
  const colors = (dark ? LibruhThemeDark.colors : LibruhThemeLight.colors)
  return (
    <View style={{justifyContent: 'center', alignItems: "center", marginTop: 32}}>
      <Image source={dark ? require("@assets/libruh/logo.png") : require("@assets/libruh/logo_lightbg.png")} style={{width: 327, height: 177, marginTop: 15}}/>
        <Text
        style={[
          styles.text,
          {
            color: colors.text,
          },
        ]}>
        Witaj w Libruh!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 112,
    paddingHorizontal: 32,
  },
  logo: {
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Header;