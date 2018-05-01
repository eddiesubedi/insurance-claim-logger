import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';
import Fonts from '../../utils/fonts';

const Search = (props) => (
  <View style={styles.container} >
    <View style={styles.icon} >
      <Icon 
        size={20}
        name="search"
      />
    </View>
    <TextInput
      style={styles.input}
      placeholder='Search'
      underlineColorAndroid="transparent"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: .1,
    shadowRadius: 10,    
    elevation: 2,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    marginLeft: 5,
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 20,
  },
  icon: {
    marginRight: 5
  }
})

export default Search;