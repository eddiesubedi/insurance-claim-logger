import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import TouchableOpacityPreventDoubleTap from '../../components/TouchableOpacityPreventDoubleTap/TouchableOpacityPreventDoubleTap';

import Input from '../../components/Input/Input';
import DescriptionCard from '../../components/DescriptionCard/DescriptionCard';
import Fonts from '../../utils/fonts';
import api from '../../utils/api';


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

  state = {
    dbData: {
      id: null,
      claim: '',
      insured: '',
      lossLocation: '',
      dateOfLoss: '',
      takenBy: '',
    },
  }

  setStateForInput = (key, value) => {
    const obj = {};
    obj[key] = value;

    const newState = { ...this.state };
    newState.dbData = { ...newState.dbData, ...obj };

    this.setState(newState);
  }
  saveClaims = () => {
    const trimmedWhiteSpaceState = JSON.parse(JSON.stringify(this.state.dbData).replace(/"\s+|\s+"/g, '"'));
    if (!Object.values(trimmedWhiteSpaceState).includes('')) {
      api.createClaim(this.state.dbData, (claims) => {
        this.props.navigation.goBack();
        this.props.navigation.state.params.reloadClaims(claims);
      });


      // this.props.navigation.navigate('Home', { reloadClaims: true });
    } else {
      alert('Fill out everything');
    }
  }
  navigateScreen = () => {
    this.props.navigation.navigate('Description');
  };

  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <View />
        <View style={styles.container}>
          <Text style={styles.heading}>Claim Info</Text>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Input
                title="Claim"
                onChangeText={claim => this.setStateForInput('claim', claim)}
                returnKeyType="next"
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                title="Insured"
                onChangeText={insured => this.setStateForInput('insured', insured)}
                ref={(input) => { this.secondTextInput = input; }}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                title="Loss Location"
                onChangeText={lossLocation => this.setStateForInput('lossLocation', lossLocation)}
                ref={(input) => { this.lossLocationInputRef = input; }}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                title="Date of Loss"
                onChangeText={dateOfLoss => this.setStateForInput('dateOfLoss', dateOfLoss)}
                ref={(input) => { this.dateOfLossInputRef = input; }}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                title="Taken By"
                onChangeText={takenBy => this.setStateForInput('takenBy', takenBy)}
                ref={(input) => { this.takenByInputRef = input; }}
              />
            </View>
          </View>
          <Text style={styles.heading}>Pictures</Text>
          <TouchableOpacityPreventDoubleTap
            style={styles.addNewContainer}
            onPress={this.navigateScreen}
          >
            <ImageBackground
              source={require('../../assets/images/camera_icon.png')}
              resizeMode="contain"
              opacity={0.5}
              style={styles.backgroundImage}
            >
              <Text style={styles.newText}>Tap to add</Text>
              <Text style={styles.newText}>picture</Text>
            </ImageBackground>
          </TouchableOpacityPreventDoubleTap>
          <View style={styles.descriptionCard}>
            <DescriptionCard
              number={1}
              description="The entire houe flod and water damage everthing. Everything needs to be replaced"
            />
          </View>
          <View style={styles.saveButtonContainer}>
            <TouchableOpacity onPress={this.saveClaims} style={styles.saveButton}>
              <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>
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
    padding: 10,
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
  saveButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#1C51FF',
    width: '70%',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 50,
  },
  saveBtnText: {
    color: 'white',
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 24,
    textAlign: 'center',
  },
});
