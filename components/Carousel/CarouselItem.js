import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import TextLetterSpacing from 'react-native-letter-spacing';

import styles from './carouselItem.style';

const CarouselItem = (props) => {
  const {
    data: { title, subtitle, illustration },
  } = props;

  const image = () => <Image source={{ uri: illustration }} style={styles.image} />;
  // onPress={() => { alert(`You've clicked '${title}'`); }}
  return (
    <View style={styles.slideInnerContainer}>
      <View style={styles.extraSpaceContainer}>
        <View style={styles.close}>
          <Text style={styles.closeIcon}>X</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.imageContainer}>{image()}</View>
          <View style={styles.textContainer}>
            <TextLetterSpacing letterSpacing={2.5} style={styles.title}>
              {`${title}`}
            </TextLetterSpacing>
            <Text style={styles.subtitle} numberOfLines={2}>
              {subtitle}
            </Text>
            <View style={styles.buttonRow}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity>
                  <Text style={[styles.btnText, styles.editText]}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.sendButton}>
                  <Text style={[styles.btnText, styles.sendText]}>Send</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CarouselItem;
