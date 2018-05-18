import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/Home/HomeScreen';
import ClaimFormScreen from './screens/ClaimForm/ClaimFormScreen';
import DescriptionScreen from './screens/Description/DescriptionScreen';

import LogoTitle from './components/header/LogoTitle';

import './utils/ReactotronConfig';

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
    Description: {
      screen: DescriptionScreen,
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
