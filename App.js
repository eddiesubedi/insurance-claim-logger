import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/Home/HomeScreen'

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    }
  },
  {
    navigationOptions: {
      header: null,
    }
  }
);