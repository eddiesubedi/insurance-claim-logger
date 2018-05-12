import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './carouselItem.style';

const CarouselItem = (props) => {
  const {
    data: {
      id, claim, insured, lossLocation, dateOfLoss, takenBy,
    },
  } = props;

  const image = () => <Image source={{ uri: 'https://i.imgur.com/SsJmZ9jl.jpg' }} style={styles.image} />;
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
            <Text style={styles.title}>
              {claim}
            </Text>
            <Text style={styles.subtitle} numberOfLines={2}>
              {insured}
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
