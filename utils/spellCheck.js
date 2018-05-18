import React from 'react';
import { Text, StyleSheet } from 'react-native';
import shortid from 'shortid';
import Spelling from 'spelling';
import dictionary from './en_US';
import Fonts from './fonts';

const SpellCheck = (description) => {
  const dict = new Spelling(dictionary);
  const words = description.replace(/\n/g, ' \n ').split(' ');

  const misspelledwordIndex = [];
  for (let i = 0; i < words.length; i += 1) {
    const word = words[i].replace(/[.?,/#!"$%^&*;:{}=\-_`~()]/g, '').replace(/’/g, "'");
    const isSpelledCorrectly = dict.lookup(word).found;
    if (!isSpelledCorrectly) {
      misspelledwordIndex.push(i);
    }
  }

  return words.map((word, i) => {
    if (misspelledwordIndex.includes(i)) {
      return (
        <Text style={[styles.description, styles.misspelled]} key={shortid.generate()}>
          {word === '\n' ? '\n' : `${word} `}
        </Text>
      );
    }
    return (
      <Text style={styles.description} key={shortid.generate()}>
        {word === '\n' ? '\n' : `${word} `}
      </Text>
    );
  });
};

const styles = StyleSheet.create({
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
});

export default SpellCheck;
