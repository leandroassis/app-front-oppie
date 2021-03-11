import React from 'react';
import { StyleSheet, View } from 'react-native';

import LoadingPage from './src/pages/LoadingPage'
import LandingPage from './src/pages/Authentication/LandingPage'
import LoginPage from './src/pages/Authentication/LoginPage'
import SignUpPage from './src/pages/Authentication/SignUpPage'
import ConfirmEmailPage from './src/pages/Authentication/ConfirmEmailPage'
import FindForPage from './src/pages/Authentication/FindForPage'
import JobTypePage from './src/pages/Authentication/JobTypePage'
import CategoryPage from './src/pages/Authentication/CategoryPage'
import MoreData from './src/pages/Authentication/MoreData'

export default function App() {
  return (
      <View style={styles.container}>
        <LoadingPage/>
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
