import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {User} from '../store/contexts/AuthContext';

export default function DetailCard({username, name}: User) {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {name?.charAt(0).toUpperCase() || 'U'}
        </Text>
      </View>
      <Text style={styles.greeting}>Welcome back,</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.username}>{username}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 28,
    borderRadius: 20,
    alignItems: 'center',
    width: '85%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 32,
  },
  avatar: {
    backgroundColor: '#D22B2B',
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
  },
  greeting: {
    fontSize: 18,
    color: '#888',
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
  },
  username: {
    fontSize: 16,
    color: '#777',
    marginTop: 4,
  },
});
