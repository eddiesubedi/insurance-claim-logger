import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Test from '../CreatePDF/Test';

import styles from './carouselItem.style';


const CarouselItem = (props) => {
  const {
    data: {
      id, claim, insured, lossLocation, dateOfLoss, takenBy, descriptions,
    },
  } = props;

  const image = () => (
    <Image
      source={{ uri: descriptions[0].uri }}
      style={styles.image}
    />
  );
  return (
    <View style={styles.slideInnerContainer}>
      <View style={styles.extraSpaceContainer}>
        <TouchableOpacity style={styles.close} onPress={props.deleteClaim.bind(this, id)}>
          <Text style={styles.closeIcon}>X</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.imageContainer}>{image()}</View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              {claim}
            </Text>
            <Text style={styles.subtitle} numberOfLines={2}>
              {`${insured} ${dateOfLoss}`}
            </Text>
            <View style={styles.buttonRow}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={props.navigateToClaim.bind(this, id)}>
                  <Text style={[styles.btnText, styles.editText]}>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                {/* <TouchableOpacity style={styles.sendButton}>
                  <Text style={[styles.btnText, styles.sendText]}>Send</Text>
                </TouchableOpacity> */}
                <Test claim={props.data} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CarouselItem;
