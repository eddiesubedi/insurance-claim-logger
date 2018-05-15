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
import ImagePicker from 'react-native-image-picker';
import Fonts from '../../utils/fonts';

const options = {
  title: 'Pick an Image',
  storageOptions: {
    cameraRoll: true,
  },
};
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
  state = {
    imageEncodedData: null,
  };
  onImageResponse = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = { uri: `data:image/jpeg;base64,${response.data}`, isStatic: true };
      this.setState({
        imageEncodedData: source,
      });
    }
  };
  selectFromGallery = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      this.onImageResponse(response);
    });
  };

  selectFromCamera = () => {
    ImagePicker.launchCamera(options, (response) => {
      this.onImageResponse(response);
    });
  };

  retakeImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      this.onImageResponse(response);
    });
  }
  navigateScreen = () => {
    this.props.navigation.navigate('CalimForm');
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.mainContainer}
        behavior="position"
        enabled
        contentContainerStyle={styles.contentContainer}
      >
        <ScrollView style={styles.container}>
          {this.state.imageEncodedData === null ? (
            <View>
              <Text style={styles.heading}>Add new picture</Text>
              <View style={styles.pictureContainer}>
                <View style={styles.galleryContainer}>
                  <TouchableOpacity style={styles.icon} onPress={this.selectFromGallery}>
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
                  <TouchableOpacity style={styles.icon} onPress={this.selectFromCamera}>
                    <Image
                      source={require('../../assets/images/camera.png')}
                      style={styles.image}
                      resizeMode="contain"
                    />
                    <Text style={styles.buttonLabel}>Camera</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View>
              <Text style={styles.pickedImageText}>Picture</Text>
              <Image
                style={styles.pickedImage}
                source={this.state.imageEncodedData}
                resizeMode="cover"
              />
              <TouchableOpacity style={styles.retakeBtn} onPress={this.retakeImage}>
                <Text style={styles.retakeBtnText}>Retake Picture</Text>
              </TouchableOpacity>
            </View>
          )}
          <Text style={styles.heading}>Add Description</Text>
          <View style={styles.inputContainer}>
            <TextInput multiline placeholder="Tap to add Description" />
          </View>
        </ScrollView>
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
    flex: 1,
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  heading: {
    color: '#7c8ea9',
    fontFamily: Fonts.ArimoBold,
    fontSize: 16,
    marginTop: 20,
  },
  pictureContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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
    marginTop: 10,
    height: 250,
    paddingLeft: 15,
    paddingRight: 15,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  pickedImageText: {
    color: '#7c8ea9',
    fontFamily: Fonts.ArimoBold,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  pickedImage: {
    borderRadius: 10,
    width: '100%',
    height: 200,
  },
  retakeBtn: {
    backgroundColor: '#F04950',
    alignSelf: 'flex-start',
    marginTop: 15,
    padding: 10,
    borderRadius: 50,
  },
  retakeBtnText: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.MontserratSemiBold,
  },
});
