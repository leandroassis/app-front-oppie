import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import LandingPage from './src/pages/Authentication/LandingPage'
import LoginPage from './src/pages/Authentication/LoginPage'
import SignUpPage from './src/pages/Authentication/SignUṕPage'
import ConfirmEmailPage from './src/pages/Authentication/ConfirmEmailPage'
import FindForPage from './src/pages/Authentication/FindForPage'

export default function App() {
  return (
      <View style={styles.container}>
        <FindForPage/>
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
