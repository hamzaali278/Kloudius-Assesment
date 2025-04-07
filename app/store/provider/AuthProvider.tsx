import React, {ReactNode, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {AuthContext, AuthContextType, User} from '../contexts/AuthContext';
import SHA256 from 'crypto-js/sha256';
import {CURRENT_USER_KEY} from '../../data/mockData'; // e.g., 'current_user'

const hashPassword = (password: string): string => {
  return SHA256(password).toString();
};

export default function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load user on app start
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem(CURRENT_USER_KEY);
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Failed to load user from storage', error);
      } finally {
        setLoading(false); // Mark loading as complete
      }
    };

    loadUser();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const storedData = await AsyncStorage.getItem(`user_${username}`);

      if (!storedData) {
        Alert.alert('Login Failed', 'User not found');
        return;
      }

      const parsedData = JSON.parse(storedData);
      const hashedInputPassword = hashPassword(password);

      if (parsedData.password !== hashedInputPassword) {
        Alert.alert('Login Failed', 'Incorrect password');
        return;
      }

      const userData = {username, name: parsedData.name};
      setUser(userData);
      await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData));
    } catch (error) {
      Alert.alert('Login Failed', 'An unexpected error occurred');
    }
  };

  const signup = async (username: string, password: string, name: string) => {
    try {
      const existingUser = await AsyncStorage.getItem(`user_${username}`);
      if (existingUser) {
        Alert.alert('Signup Failed', 'Username already taken');
        return;
      }

      const hashedPassword = hashPassword(password);
      const newUser = {name, password: hashedPassword};

      await AsyncStorage.setItem(`user_${username}`, JSON.stringify(newUser));
      const userData = {username, name};

      setUser(userData);
      await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData));
    } catch (error) {
      Alert.alert('Signup Failed', 'An unexpected error occurred');
    }
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem(CURRENT_USER_KEY);
    // await AsyncStorage.clear();
  };

  const authContextValue: AuthContextType = {
    user,
    login,
    signup,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
