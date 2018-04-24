import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './carouselItem.style';

const CarouselItem = (props) => {
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
onPress={() => { alert(`You've clicked '${title}'`); }} >
  <View style={styles.extraSpaceContainer}>
    <View style={styles.close}>
      <Text style={styles.closeIcon} >X</Text>
    </View>
    
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        { image() }
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title} >{title}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>
         { subtitle }
        </Text>
      </View>
    </View>
  </View>
</TouchableOpacity>
);
}

export default CarouselItem;