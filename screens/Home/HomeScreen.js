import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'

import Search from '../../components/Search/Search'
import Carousel from '../../components/Carousel/Carousel'

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container} >
        <View style={styles.searchContainer}>
          <Search></Search>
        </View>
        <Carousel></Carousel>
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
  }
})