import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InitialScreen from './src/components/initialScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <InitialScreen/>
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
