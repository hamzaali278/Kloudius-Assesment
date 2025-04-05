import React from 'react';
import AuthProvider from './app/store/provider/AuthProvider';
import AppNavigator from './app/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {useNotifications} from './app/hooks/useNotifications';

export default function App(): JSX.Element {
  useNotifications();
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
