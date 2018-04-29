import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/Octicons';

import Fonts from '../../utils/fonts'


const FILTER_OPTIONS = ['Date Created', 'Name', 'Unsend Claims'];

const Filter = (props) => {
  return (
    <ModalDropdown 
      options={FILTER_OPTIONS}
      animated = {false}
      defaultIndex = {0}
      dropdownTextStyle={styles.dropdownTextStyle}
      dropdownStyle={styles.dropdownStyle}>
      <Icon size={20} name="settings"/>
    </ModalDropdown>
  )
}

const styles = StyleSheet.create({
  
  dropdownStyle: {
    width: '50%',
    height: 'auto',
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .2,
    shadowRadius: 10,
    elevation: 3,
    borderRadius: 8,
    borderColor: 'transparent'
  },
  dropdownTextStyle: {
    fontFamily: Fonts.Arimo,
    fontSize: 18,
  },
  dropdownTextHighlightStyle: {
    backgroundColor: 'red',
    color: '#000'
  }

})
export default Filter;