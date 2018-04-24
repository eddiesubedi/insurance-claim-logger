import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: Module RCTImageLoader requires main queue setup since it overrides',
  ]);
  
AppRegistry.registerComponent('dhadjustingclaimlog', () => App);
