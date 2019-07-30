import React from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class ChatInput extends React.Component {
  state = {
    message: ''
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ message: text })}
        ></TextInput>
        <TouchableOpacity onPress={(e) => {
          this.props.onSubmitMessage(this.state)
        }}>
          <View style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 13,
    flex: 8,
    margin: 3,
    marginBottom:0,
  },
  sendButton: {
    backgroundColor: '#3897f0',
    borderColor: '#3897f0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 5,
    height: 32,
    justifyContent: 'center',
    flex: 4,

  },
  sendButtonText: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'center'
  }
})