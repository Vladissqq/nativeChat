import React from 'react';
import { Text, View, Platform } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, tabBarIcon } from 'react-navigation';
import Chat from '../Chat';
import UserList from '../UserList';
import RoomsList from '../RoomsList';
import CreateRoom from '../CreateRoom';
import UserInviteList from '../UserInviteList';
import Icon from 'react-native-vector-icons/FontAwesome';

const RoomsStack = createStackNavigator(
  {
    RoomList: RoomsList,
    CreateRoom: CreateRoom,
    inviteUsers: UserInviteList,
  },
  { initialRouteName: 'RoomList' }
  // {
  //   defaultNavigationOptions: {

  //     // headerTintColor: '#fff',
  //     headerStyle: {
  //     },
  //   },
  // }
);

const TabNavigator = createBottomTabNavigator({
  Chat: {
    screen: Chat,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => (
        <Icon color={tintColor} name='comment' size={23} />
      ),
      tabBarOptions: {
        activeTintColor: '#3897f0',
        inactiveTintColor: '#abcbca'
      }
    }
  },
  Uses: {
    screen: UserList,
    navigationOptions: {
      tabBarLabel: 'Users',
      tabBarIcon: ({ tintColor }) => (
        <Icon color={tintColor} name='user-circle' size={23} />
      ),
      tabBarOptions: {
        activeTintColor: '#3897f0',
        inactiveTintColor: '#abcbca'
      }
    }
  },
  Rooms: {
    screen: RoomsStack,
    navigationOptions: {
      tabBarLabel: 'Rooms',
      tabBarIcon: ({ tintColor }) => (
        <Icon color={tintColor} name='users' size={23} />
      ),
      tabBarOptions: {
        activeTintColor: '#3897f0',
        inactiveTintColor: '#abcbca'
      }
    }
  },
  
}
);
TabNavigator.navigationOptions = ({ navigation }) => ({
  title: 'Chats',
  headerRight: (
    <Icon
      name="add"
      color="blue"
      size={30}
      onPress={() => navigation.navigate('Chat')}
    />
  ),
});

export default createAppContainer(TabNavigator);