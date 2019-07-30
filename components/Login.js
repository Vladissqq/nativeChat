import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import ValidationComponent from 'react-native-form-validator';

export default class Login extends ValidationComponent {
  state = {
    email: '',
    password: '',
    disabled: true
  }

  onChangeText = () => {
    this.validate({
      email: { email: true },
      password: { minlength: 6, maxlength: 25, required: true },
    })
      ?
      this.setState({ disabled: false }) : this.setState()
  }

  _onPressSignIn = () => {
    this.props.navigation.navigate('App');
  }

  _onPressSignUp = () => {
    this.props.navigation.navigate('Reg');
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
          Login
      </Text>
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
        <TouchableOpacity onPress={this._onPressSignIn}
          disabled={this.state.disabled}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.registration}>
          <Text style={{ fontSize: 13, marginRight: 10 }}>Don't have an account?</Text>
          <Text onPress={this._onPressSignUp} style={{ fontSize: 13, color: '#3897f0' }}>Sign up</Text>
        </View>
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
  button: {
    height: 36,
    backgroundColor: '#3897f0',
    borderColor: '#3897f0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  TouchableOpacity: {
    marginTop: 3
  }
});