import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import ValidationComponent from 'react-native-form-validator';

export default class Registration extends ValidationComponent {
  state = {
    username: '',
    email: '',
    password: '',
    disabled: true
  }

  onChangeText = () => {
    this.validate({
      username: { required: true },
      email: { email: true },
      password: { minlength: 6, maxlength: 25, required: true },
    })
      ?
      this.setState({ disabled: false }) : this.setState()
  }
  _onPressSingUp = () => {
    this.props.navigation.navigate('App');
  }
  _onPressBack = () => {
    this.props.navigation.navigate('Auth');
  }
  usernameStyle = () => {
    if (this.state.username === '') {
      return styles.inputDefault
    }
    else if (this.state.username !== '' && !this.validate({
      username: { required: true },
    })) {
      return styles.inputError
    }
    else {
      return styles.inputCorrect
    }
  }
  emailStyle = () => {
    if (this.state.email === '') {
      return styles.inputDefault
    }
    else if (this.state.email !== '' && !this.validate({
      email: { email: true },
    })) {
      return styles.inputError
    }
    else {
      return styles.inputCorrect
    }
  }

  passwordStyle = () => {
    if (this.state.password === '') {
      return styles.inputDefault
    }
    else if (this.state.password !== '' && !this.validate({
      password: { minlength: 6, maxlength: 25, required: true },
    })) {
      return styles.inputError
    }
    else {
      return styles.inputCorrect
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Registration
      </Text>
        <TextInput
          style={this.usernameStyle()}
          placeholder="Username"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ username: text });
            this.onChangeText()
          }}
        />
        <TextInput
          style={this.emailStyle()}
          placeholder="Email"
          onChangeText={(text) => {
            this.setState({ email: text });
            this.onChangeText()
          }}
        />
        <TextInput
          style={this.passwordStyle()}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ password: text });
            this.onChangeText()
          }}
        />
        <TouchableOpacity onPress={this._onPressSingUp}
          disabled={this.state.disabled}
        >
          <View style={styles.buttonSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressBack}>
          <View style={styles.buttonBack}>
            <Text style={styles.buttonText}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputDefault: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 13,
    paddingHorizontal: 13
  },
  inputError: {
    height: 40,
    borderColor: '#df1e3970',
    borderWidth: 3,
    borderRadius: 7,
    marginBottom: 13,
    paddingHorizontal: 13
  },
  inputCorrect: {
    height: 40,
    borderColor: '#68a85a70',
    borderWidth: 3,
    borderRadius: 7,
    marginBottom: 13,
    paddingHorizontal: 13
  },
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  registration: {
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  buttonSignUp: {
    height: 36,
    backgroundColor: '#3897f0',
    borderColor: '#3897f0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonBack: {
    height: 38,
    backgroundColor: '#3897f090',
    borderColor: '#3897f010',
    borderWidth: 3,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  TouchableOpacity: {
    marginTop: 3
  }
});