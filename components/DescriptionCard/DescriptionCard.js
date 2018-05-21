import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Fonts from '../../utils/fonts';


const DescriptionCard = props => (
  <View style={styles.container}>
    <View style={styles.shadow}>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{props.number}</Text>
      </View>
      <Image
        source={props.image}
        style={styles.image}
        resizeMode="cover"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      />
      <View style={styles.descriptionContainer}>
        <Text>
          {props.children}
        </Text>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={props.navigateEditScreen.bind(this, props.description)} style={styles.button}>
            <Text style={styles.btnText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={props.deleteDescription.bind(this, props.description.id)} style={[styles.button, styles.deleteBtn]}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

DescriptionCard.propTypes = {
  number: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 10,
  },
  shadow: {
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  numberContainer: {
    position: 'absolute',
    right: 3,
    top: 3,
    zIndex: 2,
    backgroundColor: 'white',
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  number: {
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 16,
    padding: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
  description: {
    fontFamily: Fonts.PoppinsLight,
    fontSize: 16,
    color: 'black',
    lineHeight: 22,
  },
  misspelled: {
    color: 'red',
    textDecorationLine: 'underline',
  },
  descriptionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    paddingBottom: 0,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    paddingTop: 0,
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    alignSelf: 'flex-start',
  },
  deleteBtn: {
    alignSelf: 'flex-end',
  },
  btnText: {
    fontFamily: Fonts.MontserratSemiBold,
    color: 'black',
    fontSize: 16,
    padding: 10,
  },
});

export default DescriptionCard;
