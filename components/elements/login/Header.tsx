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

import {ImageBackground, Text, StyleSheet} from 'react-native';
import {useColorScheme} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React from 'react';

const Header = (): ReactNode => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ImageBackground
      accessibilityRole="image"
      testID="new-app-screen-header"
      source={require('../../../assets/landing-bg-logo.png')}
      style={[
        styles.background,
      ]}
      imageStyle={styles.logo}>
      <Text
        style={[
          styles.text,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Welcome to
        {'\n'}
        Libruh
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 112,
    paddingHorizontal: 32,
  },
  logo: {
    opacity: 0.2,
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
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Header;