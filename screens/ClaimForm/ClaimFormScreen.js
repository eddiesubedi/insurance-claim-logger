import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';

import Input from '../../components/Input/Input';
import DescriptionCard from '../../components/DescriptionCard/DescriptionCard';
import Fonts from '../../utils/fonts';

export default class ClaimFormScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.btnText}>Back</Text>
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.btnText}>Send</Text>
      </TouchableOpacity>
    ),
  });
  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.heading}>Claim Info</Text>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Input title="Claim" />
            </View>
            <View style={styles.inputContainer}>
              <Input title="Insured" />
            </View>
            <View style={styles.inputContainer}>
              <Input title="Loss Location" />
            </View>
            <View style={styles.inputContainer}>
              <Input title="Date of Loss" />
            </View>
            <View style={styles.inputContainer}>
              <Input title="Taken By" />
            </View>
          </View>
          <Text style={styles.heading}>Pictures</Text>
          <View style={styles.addNewContainer}>
            <ImageBackground
              source={require('./camera.png')}
              resizeMode="contain"
              style={styles.backgroundImage}
            >
              <Text style={styles.newText}>Tap to add</Text>
              <Text style={styles.newText}>Picture</Text>
            </ImageBackground>
          </View>
          <View style={styles.descriptionCard}>
            <DescriptionCard
              number={1}
              description="The entire houe flod and water damage everthing. Everything needs to be replaced"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnText: {
    fontSize: 18,
    fontFamily: Fonts.MontserratSemiBold,
    color: 'black',
  },
  mainContainer: {
    backgroundColor: '#f6f7f9',
  },
  container: {
    margin: 20,
  },
  heading: {
    color: '#7c8ea9',
    fontFamily: Fonts.ArimoBold,
    fontSize: 16,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  addNewContainer: {
    backgroundColor: 'white',
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 20,
  },
  newText: {
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 20,
    color: 'black',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionCard: {
    marginBottom: 20,
  },
});
