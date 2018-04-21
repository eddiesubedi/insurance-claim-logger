import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'

import Search from '../../components/Search/Search'

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container} >
        <View style={styles.searchContainer}>
          <Search></Search>
        </View>
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
    padding: 20,
  }
})