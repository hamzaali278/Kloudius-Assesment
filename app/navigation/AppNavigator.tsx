import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';

import {useAuth} from '../store/contexts/AuthContext';
import SplashScreen from '../screens/SplashScreen';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator(): JSX.Element {
  const {user} = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        // eslint-disable-next-line react/no-unstable-nested-components
        headerBackImage: () => (
          <Ionicons name="arrow-back" size={24} style={{marginLeft: 12}} />
        ),
      }}>
      {isLoading ? (
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerShown: false,
          }}
        />
      ) : user ? (
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerShown: false,
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerTransparent: true,
              headerTitle: '',
              headerShown: false,
            }}
          />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
