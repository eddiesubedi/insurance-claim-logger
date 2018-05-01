import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class ClaimFormScreen  extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: <TouchableOpacity onPress={ () => { navigation.goBack() }}><Text>Back</Text></TouchableOpacity>,
    headerRight: <TouchableOpacity ><Text>Save</Text></TouchableOpacity>,
  });
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}