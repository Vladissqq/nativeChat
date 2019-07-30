import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import { roomAction } from './store/actions/ations';
import { connect } from 'react-redux';

class CreateRoom extends ValidationComponent {
  state = {
    disabled: true,
    room: '',
    email: 'vladissqq@gmail.com'
  }

  onChangeText = () => {
    this.validate({
      name: { minlength: 3, maxlength: 25, required: true },
    })
      ?
      this.setState({ disabled: false }) : this.setState()
  }

  _onPressCreate = () => {
    const {connection} = this.props.socket;
    connection.emit('create',this.state)
    this.props.navigation.goBack();
  }

  nameStyle = () => {
    if (this.state.name === '') {
      return styles.inputDefault
    }
    else if (this.state.name !== '' && !this.validate({
      room: { minlength: 3, maxlength: 25, required: true },
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
          Create your room
      </Text>
        <TextInput
          style={this.nameStyle()}
          placeholder="Room name"
          onChangeText={(text) => {
            this.setState({ room: text });
            this.onChangeText()
          }}
        />
        <TouchableOpacity onPress={this._onPressCreate}
          disabled={this.state.disabled}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Create</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    rooms: state.room,
    socket: state.socket
  }
}

export default connect(mapStateToProps,{roomAction})(CreateRoom)

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
    marginTop: 7,
    padding: 20,
    backgroundColor: '#ffffff',
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
  },
  headerText: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    marginBottom:53
  },
});