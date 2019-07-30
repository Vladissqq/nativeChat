import React, { Component } from 'react';
import {  View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import openSocket from 'socket.io-client';
import { connect } from 'react-redux';
import { write } from './store/actions/ations';
import { idOnline } from './store/actions/ations';
import { roomAction } from './store/actions/ations';
import { inf } from './store/actions/ations';
import { usersAction } from './store/actions/ations';
import { getUsers } from './store/actions/ations';
import { getInfo } from './store/actions/ations';
import { getRooms } from './store/actions/ations';
import { getMessages } from './store/actions/ations';
import {createConnection} from './store/actions/ations';
import ChatInput from './ChatInput';
import Messager from './Messager';
import {Icon} from 'react-native-elements';
const URL = 'http://192.168.0.112:8124';

class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Chats',
    headerRight: (
      <Icon
        name="add"
        color="blue"
        size={30}
        onPress={() => navigation.navigate('CreateDialog')}
      />
    ),
  });

  state = {
    room: this.props.roomNow,
    info: null
  }
  componentDidMount() {
    this.props.getInfo();
    this.props.getUsers();
    this.props.getRooms();
    this.props.getMessages();

    this.ws = openSocket(URL);
    this.props.createConnection(this.ws);

    this.ws.on('connect', () => {
      console.log('connected');
      // this.ws.emit('send_email', localStorage.getItem('email_chat'));
    }); 

    this.ws.on('input message', (message) => {
      this.props.write(message);
    });
  }
  submitMessage = (obj) => {
    obj.room = this.state.room;
    obj.name = this.props.info.info.firstName;
    this.ws.emit('output message', obj);
    this.props.write(obj);
  }
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "height" : null}
          keyboardVerticalOffset={64}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 8 }}>
            <ScrollView
            ref={ref => this.ScrollView = ref}
            onContentSizeChange={(contentWidth, contentHeight) => {
              this.ScrollView.scrollToEnd({animated: true});
            }}
            >
             {this.props.message.messages.map((message, index) =>
              <Messager
                key={index}
                message={message.message}
                name={message.name}
              />,
            )}
            </ScrollView>
            </View>
            <ChatInput
              onSubmitMessage={(value) => {
              this.submitMessage(value)
            }}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    flex: 1
  },
  sendButton: {
    backgroundColor: '#3897f0',
    borderColor: '#3897f0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 4,

  },
  sendButtonText: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'center'
  }
});

function mapStateToProps(state) {
  return {
    message: state.message,
    ids: state.id,
    rooms: state.room,
    info: state.info,
    users: state.users,
    roomNow: state.roomNow,
    socket: state.socket
  }
}

export default connect(mapStateToProps, 
  { write, idOnline, roomAction, inf, usersAction, getUsers, getInfo, getRooms,getMessages,createConnection })(Chat);