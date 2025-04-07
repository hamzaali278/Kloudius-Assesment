import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {useAuth} from '../store/contexts/AuthContext';
import DetailCard from '../components/DetailCard';

export default function HomeScreen(): JSX.Element {
  const {user, logout} = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/splash-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Welcome Card */}
      {user?.username && user?.name && <DetailCard {...user} />}

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fc',
    paddingTop: 32,
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 100,
    marginBottom: 24,
  },

  logoutButton: {
    backgroundColor: '#D22B2B',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 2,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
