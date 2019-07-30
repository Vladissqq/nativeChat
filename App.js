import React from 'react';
import Profile from './components/Profile'
import { Provider } from 'react-redux';
import { store } from './components/store/reducers/index'; 
import TabNavigator from './components/Routing/TabNavigator';
import Router from './components/Routing/Router';

export default function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}
