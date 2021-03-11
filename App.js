import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import AuthenticationRoutes from './src/routes/Authentication.routes'

export default function App() {
  return (
    <NavigationContainer>
        <AuthenticationRoutes/>
    </NavigationContainer>
  );
}