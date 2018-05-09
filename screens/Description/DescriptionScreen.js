import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import Fonts from '../../utils/fonts';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.btnText}>Cancel</Text>
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    ),
  });

  navigateScreen = () => {
    this.props.navigation.navigate('CalimForm');
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.mainContainer} behavior="position" enabled>
        <View style={styles.container}>
          <Text style={styles.heading}>Add new picture</Text>
          <View style={styles.pictureContainer}>
            <View style={styles.galleryContainer}>
              <TouchableOpacity style={styles.icon}>
                <Image
                  source={require('../../assets/images/gallery.png')}
                  style={styles.image}
                  resizeMode="contain"
                />
                <Text style={styles.buttonLabel}>Gallery</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.orContainer}>
              <Text style={styles.orText}>OR</Text>
            </View>
            <View style={styles.cameraContainer}>
              <TouchableOpacity style={styles.icon}>
                <Image
                  source={require('../../assets/images/camera.png')}
                  style={styles.image}
                  resizeMode="contain"
                />
                <Text style={styles.buttonLabel}>Camera</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.heading}>Add Description</Text>
          <View style={styles.inputContainer}>
            <TextInput multiline placeholder="Tap to add Description" />
          </View>
        </View>
      </KeyboardAvoidingView>
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
    display: 'flex',
    flex: 1,
  },
  container: {
    margin: 20,
  },
  heading: {
    color: '#7c8ea9',
    fontFamily: Fonts.ArimoBold,
    fontSize: 16,
  },
  pictureContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  icon: {
    backgroundColor: 'white',
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  image: {
    width: '100%',
  },
  galleryContainer: {
    flex: 2,
  },
  orContainer: {
    flex: 1,
  },
  orText: {
    textAlign: 'center',
    color: '#999999',
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 18,
  },
  cameraContainer: {
    flex: 2,
  },
  buttonLabel: {
    color: 'black',
    fontFamily: Fonts.MontserratSemiBold,
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    height: 250,
    padding: 10,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
