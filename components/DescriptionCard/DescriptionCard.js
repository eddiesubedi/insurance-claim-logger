import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Spelling from 'spelling';
import shortid from 'shortid';

import dictionary from '../../utils/en_US';
import Fonts from '../../utils/fonts';

const dict = new Spelling(dictionary);
const spellCheck = (description) => {
  const words = description.split(' ');
  const misspelledwordIndex = [];
  for (let i = 0; i < words.length; i += 1) {
    const word = words[i].replace(/[.,/#!"$%^&*;:{}=\-_`~()]/g, '');
    const isSpelledCorrectly = dict.lookup(word).found;
    if (!isSpelledCorrectly) {
      misspelledwordIndex.push(i);
    }
  }
  return words.map((word, i) => {
    if (misspelledwordIndex.includes(i)) {
      return (
        <Text style={[styles.description, styles.misspelled]} key={shortid.generate()}>
          {`${word} `}
        </Text>
      );
    }
    return <Text style={styles.description} key={shortid.generate()}>{`${word} `}</Text>;
  });
};

const DescriptionCard = props => (
  <View style={styles.container}>
    <View style={styles.shadow}>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{props.number}</Text>
      </View>
      <Image
        source={require('./waterdamage.jpg')}
        style={styles.image}
        resizeMode="cover"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      />
      <View style={styles.descriptionContainer}>{spellCheck(props.description)}</View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={null} style={styles.button}>
            <Text style={styles.btnText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={null} style={[styles.button, styles.deleteBtn]}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

DescriptionCard.propTypes = {
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
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
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
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
