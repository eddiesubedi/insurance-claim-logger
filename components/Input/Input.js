import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Fonts from '../../utils/fonts';

const Input = props => (
  <View>
    <Text style={styles.text}>{props.title}</Text>
    <TextInput {...props} style={styles.input} underlineColorAndroid="transparent" />
  </View>
);

Input.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  text: {
    color: '#999999',
    fontFamily: Fonts.PoppinsLight,
    fontSize: 14,
    marginBottom: 2,
  },
  input: {
    padding: 10,
    paddingLeft: 15,
    margin: 0,
    flex: 1,
    fontSize: 18,
    backgroundColor: '#eaf3f5',
    borderRadius: 10,
    fontFamily: Fonts.Arimo,
  },
});

export default Input;
