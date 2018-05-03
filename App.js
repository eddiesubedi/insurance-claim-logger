import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/Home/HomeScreen';
import ClaimFormScreen from './screens/ClaimForm/ClaimFormScreen';
import LogoTitle from './components/header/LogoTitle';

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    CalimForm: {
      screen: ClaimFormScreen,
    },
  },
  {
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  },
);
