import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Alert } from 'react-native';
import TextLetterSpacing from 'react-native-letter-spacing';
import Icon from 'react-native-vector-icons/Octicons';

import Search from '../../components/Search/Search';
import CarouselList from '../../components/Carousel/CarouselList';
import Filter from '../../components/Filter/Filter';
import Fonts from '../../utils/fonts';
import TouchableOpacityPreventDoubleTap from '../../components/TouchableOpacityPreventDoubleTap/TouchableOpacityPreventDoubleTap';
import { itemWidth } from '../../utils/carousel';
import api from '../../utils/api';

export default class HomeScreen extends Component {
  state = {
    data: null,
  }
  componentDidMount() {
    this.getClaims();
  }
  getClaims = () => {
    api.getClaims((claims) => {
      this.setState({ ...this.state, data: claims });
    });
  }
  reloadClaims = (claims) => {
    this.setState({ ...this.state, data: claims });
  };

  navigateScreen = () => {
    this.props.navigation.navigate('CalimForm', { reloadClaims: this.reloadClaims, id: null });
  };

  navigateEditScreen = (id) => {
    this.props.navigation.navigate('CalimForm', { reloadClaims: this.reloadClaims, id });
  }

  deleteClaim = (id) => {
    Alert.alert(
      'Are you sure?', '',
      [
        { text: 'Cancel' },
        {
          text: 'Yes',
          onPress: () => {
            api.removeClaim(id, (claims) => {
              this.setState({ ...this.state, data: claims });
            });
          },
        },
      ],
    );
  }

  renderCaroselList = () => {
    const { data } = this.state;
    if (!data && typeof data === 'object') {
      return <Text>Loading...</Text>;
    }
    if (data.length === 0) {
      return <Text>No New Claims</Text>;
    }
    return <CarouselList data={this.state.data} deleteClaim={this.deleteClaim} navigateToClaim={this.navigateEditScreen} />;
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Search />
        </View>
        <View style={styles.filterContainer}>
          <View style={styles.textContainer}>
            <TextLetterSpacing letterSpacing={2} style={styles.text}>
              {'Claims '}
            </TextLetterSpacing>
          </View>
          <View style={styles.filter}>
            <Filter />
          </View>
        </View>
        <View style={styles.cards}>
          {
            this.renderCaroselList()
          }
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacityPreventDoubleTap style={styles.button} onPress={this.navigateScreen}>
            <Icon size={30} name="plus" color="#fff" />
            <Text style={styles.buttonText}>Start a new Claim</Text>
          </TouchableOpacityPreventDoubleTap>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flex: 1,
  },
  searchContainer: {
    padding: 30,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 20,
    width: itemWidth - 20,
    alignSelf: 'center',
  },
  filterContainer: {
    width: itemWidth - 20,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 25,
    fontFamily: Fonts.PoppinsSemiBold,
  },
  filter: {},
  cards: {
    flex: 3,
  },
  btnContainer: {
    flex: 1,
    width: itemWidth - 20,
    alignSelf: 'center',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#f04950',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: Fonts.PoppinsBold,
    marginLeft: 10,
  },
});
