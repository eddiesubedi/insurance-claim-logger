import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

// export default class LogoTitle extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Image style={styles.logo} source={require('./logo.jpg')} />
//       </View>
//     );
//   }
// }

const LogoTitle = () => (
  <View style={styles.container}>
    <Image style={styles.logo} source={require('./logo.jpg')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default LogoTitle;
