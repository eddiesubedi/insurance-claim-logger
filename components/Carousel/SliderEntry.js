import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './SliderEntry.style';

const SliderEntry = (props) => {
  const { data: { title, subtitle, illustration } } = props;

  const image = () => (
    <Image
      source={{ uri: illustration }}
      style={styles.image}
    />
  );
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.slideInnerContainer}
      onPress={() => { alert(`You've clicked '${title}'`); }}
      >
        <View style={styles.imageContainer}>
          { image() }
        </View>
        <View style={styles.textContainer}>
          <Text>{title}</Text>
          <Text
            style={styles.subtitle}
            numberOfLines={2}
          >
            { subtitle }
          </Text>
        </View>
    </TouchableOpacity>
  );
}

// const styles = StyleSheet.create({
  
// })

export default SliderEntry;