import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';
import axios from 'axios';
// import console = require('console');

class UserInviteList extends React.Component {
  state = {
    chosen: {},
    inviteRoom: this.props.invite
  }
  checked = function (chosen, u) {
    chosen[u.email] = !chosen[u.email];
    this.setState({ chosen })
  }

  handleChecked = function () {
    const users = [];
    const { chosen } = this.state;
    const { invite } = this.props.invite;

    for (const key in chosen) {
      if (chosen[key]) {
        users.push(key)
      }
    }
    axios.post('http://192.168.0.112:8124/invite', { guests: users, room: invite })
    this.props.navigation.navigate('RoomList');
  }

  iconStyle = function () {
    const { chosen } = this.state;

  }


  render() {
    const { users } = this.props.users
    const { chosen } = this.state

    return (
      <View>
        <ScrollView>
          <Card containerStyle={{ padding: 3 }}>
            {
              users.map((u, i) => {
                return (
                  <View
                    key={i}
                    style={{ flexDirection: 'row' }}
                  >
                    <CheckBox
                      checked={chosen[u.email]}
                      onPress={() => {
                        this.checked(chosen, u)
                      }}
                      style={{ width: 50, height: 50, borderRadius: 25 }}
                    />
                    <Image
                      source={{ uri: u.img }}
                      style={{ width: 50, height: 50, borderRadius: 25 }}
                    />
                    <Text
                      style={styles.text}
                    >
                      {u.firstName}
                    </Text>
                    <Text
                      style={styles.text}
                    >
                      {u.secondName}
                    </Text>
                  </View>
                );
              })
            }
          </Card>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            this.handleChecked()
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Invite</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: 'black',
    alignSelf: 'center',
    marginLeft: 7
  },
  iconDefault: {
    opacity: 0
  },
  iconChecked: {
    opacity: 100
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
    justifyContent: 'center',
    margin: 7
  },

});

function mapStateToProps(state) {
  return {
    users: state.users,
    invite: state.invite
  }
}

export default connect(mapStateToProps)(UserInviteList)