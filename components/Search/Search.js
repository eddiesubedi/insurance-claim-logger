import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';

const Search = (props) => (
  <View style={styles.container} >
    <Icon 
      size={20}
      name="search"
    />
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
    borderRadius: 5,
    padding: 10,
  },
  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    marginLeft: 5,
  }
})

export default Search;