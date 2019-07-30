import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({ name, message }) =>
  <View style={styles.messageContainer}>
    <Text style={styles.name}> {name}</Text>
    <Text style={styles.message}>{message}</Text>
  </View>

const styles = StyleSheet.create({
  messageContainer: {
    marginLeft: 13,
    marginRight: 17,
    marginBottom: 7,
    padding: 13,
    backgroundColor: '#ededed',
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  message: {
    
  }
})