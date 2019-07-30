import React from 'react'
import { connect } from 'react-redux';
import { ScrollView, RefreshControl } from 'react-native'
import { Card } from 'react-native-elements'
import Room from './Room'
import { Icon } from 'react-native-elements';
import { getRooms } from './store/actions/ations';
import {roomInvite} from './store/actions/ations';


class RoomsList extends React.Component {
  state = {
    refreshing: false,
  }

  _onRefresh = async () => {
    this.setState({ refreshing: true });
    this.props.getRooms()
    await this.setState({ refreshing: false });

  }
  joinRoom = (room) => {
    const {connection} = this.props.socket;
    connection.emit('join_room',room)
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'Your rooms:',
    headerRight: (
      <Icon
        name="add"
        color="#3897f0"
        size={30}
        onPress={() => navigation.navigate('CreateRoom')}
      />
    ),
  });

  render() {
    const { rooms } = this.props.rooms

    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        <Card containerStyle={{ flex: 1 }}>
          {
            rooms.map((room, i) => {
              console.log(room)
              return (
                <Room
                  key={i}
                  room={room}
                  joinRoom={this.joinRoom}
                  navigation={this.props.navigation}
                  inviteRoom={this.props.roomInvite}
                />
              );
            })
          }
        </Card>
      </ScrollView>
    )
  }
}


function mapStateToProps(state) {
  return {
    rooms: state.room,
    socket: state.socket
  }
}

export default connect(mapStateToProps, { getRooms, roomInvite})(RoomsList)