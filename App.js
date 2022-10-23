/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import BottomTabs from './navigators/BottomTabs';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Text> Hello. This is our app</Text>
      <Button title="button that doesn't do anything"/>
      <Button title="another button that doesn't do anything"/>
      {/* <BottomTabs/> */}
    </View>
  );
}

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
