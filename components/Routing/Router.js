import AuthLoadingScreen from './AuthLoadingScreen';
import Chat from '../Chat';
import Login from '../Login';
import Registration from '../Registration';
import TabNavigator from './TabNavigator';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';




export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabNavigator,
    Auth: Login,
    Reg: Registration
  },
  {
    initialRouteName: 'App',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
));