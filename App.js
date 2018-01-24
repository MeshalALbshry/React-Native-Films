import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


import DetailsScreen from './Details'
import FilmsList  from "./src/component/FilmsList"


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <FilmsList navigation={navigation}/>
    </View>
  )
}

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Films List'
    }
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  }
});

export default RootNavigator;