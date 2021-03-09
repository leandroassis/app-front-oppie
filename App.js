import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import LandingPage from './src/pages/Authentication/LandingPage'
import LoginPage from './src/pages/Authentication/LoginPage'

export default function App() {
  return (
      <View style={styles.container}>
        {/*<LandingPage/>*/}
        <LoginPage/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
