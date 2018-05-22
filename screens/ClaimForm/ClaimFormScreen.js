import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import shortid from 'shortid';
import DatePicker from 'react-native-datepicker';

import TouchableOpacityPreventDoubleTap from '../../components/TouchableOpacityPreventDoubleTap/TouchableOpacityPreventDoubleTap';
import Input from '../../components/Input/Input';
import DescriptionCard from '../../components/DescriptionCard/DescriptionCard';
import Fonts from '../../utils/fonts';
import api from '../../utils/api';
import dictionary from '../../utils/en_US';
import spellCheck from '../../utils/spellCheck';


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
      id: this.props.navigation.state.params.id,
      claim: '',
      insured: '',
      lossLocation: '',
      dateOfLoss: '',
      takenBy: '',
      descriptions: [],
    },
    hideText: true,
  }

  componentDidMount() {
    const { id } = this.state.dbData;
    if (!(!id && typeof id === 'object')) {
      api.getClaims((claims) => {
        const claim = claims.find(tempClaim => tempClaim.id === id);
        this.setState({
          ...this.state,
          dbData: {
            ...this.state.dbData,
            claim: claim.claim,
            insured: claim.insured,
            lossLocation: claim.lossLocation,
            dateOfLoss: claim.dateOfLoss,
            takenBy: claim.takenBy,
            descriptions: claim.descriptions,
          },
          hideText: false,
        });
      });
    }
  }

  setStateForInput = (key, value) => {
    const obj = {};
    obj[key] = value;

    const newState = { ...this.state };
    newState.dbData = { ...newState.dbData, ...obj };

    this.setState(newState);
  }

  addDescription = (uri, text) => {
    const description = {
      id: shortid.generate(),
      uri,
      text,
    };
    this.setState({
      ...this.state.dbData,
      descriptions: this.state.dbData.descriptions.push(description),
    });
  }

  editDescription = (id, uri, text) => {
    const { descriptions } = this.state.dbData;
    const newDescription = { id, uri, text };

    const currDescription = descriptions.find(tempDescription => tempDescription.id === id);
    const index = descriptions.indexOf(currDescription);

    descriptions[index] = newDescription;
    this.setState({
      ...this.state.dbData,
      descriptions: newDescription,
    });
  }

  createNewClaim = () => {
    api.createClaim(this.state.dbData, (claims) => {
      this.props.navigation.goBack();
      this.props.navigation.state.params.reloadClaims(claims);
    });
  }

  editClaim = () => {
    api.editClaim(this.state.dbData, (claims) => {
      this.props.navigation.goBack();
      this.props.navigation.state.params.reloadClaims(claims);
    });
  }

  saveClaims = () => {
    const { id } = this.state.dbData;
    const trimmedWhiteSpaceState = JSON.parse(JSON.stringify(this.state.dbData).replace(/"\s+|\s+"/g, '"'));
    if (!Object.values(trimmedWhiteSpaceState).includes('')) {
      if (!id && typeof id === 'object') {
        this.createNewClaim();
      } else {
        this.editClaim();
      }
    } else {
      alert('Fill out everything');
    }
  }

  navigateScreen = () => {
    this.props.navigation.navigate('Description', { addDescription: this.addDescription, description: null, edit: false });
  };

  navigateEditScreen = (description) => {
    this.props.navigation.navigate('Description', { editDescription: this.editDescription, description, edit: true });
  }

  deleteDescription = (id) => {
    Alert.alert(
      'Are you sure?', '',
      [
        { text: 'Cancel' },
        {
          text: 'Yes',
          onPress: () => {
            const { descriptions } = this.state.dbData;

            const currDescription = descriptions.find(tempDescription => tempDescription.id === id);
            const index = descriptions.indexOf(currDescription);

            this.setState({
              ...this.state.dbData,
              descriptions: this.state.dbData.descriptions.splice(index, 1),
            });
          },
        },
      ],
    );
  }
  dateSelected = (dateOfLoss) => {
    this.setState({ ...this.setState, hideText: false });
    this.setStateForInput('dateOfLoss', dateOfLoss);
    this.takenByInput.focus();
  }
  claimInput = React.createRef();
  insuredInput = React.createRef();
  lossLocationInput = React.createRef();
  dateOfLossInput = React.createRef();
  takenByInput = React.createRef();
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
                value={this.state.dbData.claim}
                inputRef={(ref) => { this.claimInput = ref; }}
                returnKeyType="next"
                onSubmitEditing={() => { this.insuredInput.focus(); }}
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                title="Insured"
                onChangeText={insured => this.setStateForInput('insured', insured)}
                value={this.state.dbData.insured}
                inputRef={(ref) => { this.insuredInput = ref; }}
                returnKeyType="next"
                onSubmitEditing={() => { this.lossLocationInput.focus(); }}

              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                title="Loss Location"
                onChangeText={lossLocation => this.setStateForInput('lossLocation', lossLocation)}
                value={this.state.dbData.lossLocation}
                inputRef={(ref) => { this.lossLocationInput = ref; }}
                returnKeyType="next"
                onSubmitEditing={() => { this.dateOfLossInput.onPressDate(); }}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.datePickerLabel}>Date of Loss</Text>
              <DatePicker
                ref={(ref) => { this.dateOfLossInput = ref; }}
                date={this.state.dbData.dateOfLoss}
                mode="date"
                hideText={this.state.hideText}
                format="MM/DD/YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={this.dateSelected}
                showIcon={false}
                style={styles.datePickerInput}
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    paddingLeft: 10,
                    alignItems: 'flex-start',
                  },
                  dateText: {
                    fontFamily: Fonts.Arimo,
                    fontSize: 18,
                  },
                }}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                title="Taken By"
                onChangeText={takenBy => this.setStateForInput('takenBy', takenBy)}
                value={this.state.dbData.takenBy}
                inputRef={(ref) => { this.takenByInput = ref; }}
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
            {
              this.state.dbData.descriptions.map((description, index) => (
                <DescriptionCard
                  key={description.id}
                  image={{ uri: description.uri, isStatic: true }}
                  number={index + 1}
                  dictionary={dictionary}
                  description={description}
                  navigateEditScreen={this.navigateEditScreen}
                  deleteDescription={this.deleteDescription}
                >
                  {spellCheck(description.text)}
                </DescriptionCard>
              ))
            }

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
  datePickerLabel: {
    color: '#999999',
    fontFamily: Fonts.PoppinsLight,
    fontSize: 14,
    marginBottom: 2,
  },
  datePickerInput: {
    padding: 4,
    margin: 0,
    flex: 1,
    backgroundColor: '#eaf3f5',
    borderRadius: 10,
    width: '100%',
  },
});
