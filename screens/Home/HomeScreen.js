import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import TextLetterSpacing from 'react-native-letter-spacing';

import Search from '../../components/Search/Search'
import CarouselList from '../../components/Carousel/CarouselList'
import Filter from '../../components/Filter/Filter'

import {itemWidth} from '../../utils/carousel'

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container} >
        <View style={styles.searchContainer}>
          <Search></Search>
        </View>
        <View style = {styles.filterContainer} >
          <View style= {styles.textContainer}>
            <TextLetterSpacing letterSpacing={2} style={styles.text}>
            {`Claims `} 
            </TextLetterSpacing>
          </View>
          <View style={styles.filter}>
            <Filter />
          </View>
        </View>
        <CarouselList></CarouselList>
      </SafeAreaView>
    )
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
    width: itemWidth - 20,
    alignSelf: 'center'
  },
  filterContainer: {
    width: itemWidth - 20,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  textContainer: {
    flex: 1
  },
  text: {
    color: "black",
    fontSize: 25,
    fontFamily: Fonts.PoppinsSemiBold,
  },
  filter: {
    
  }
})