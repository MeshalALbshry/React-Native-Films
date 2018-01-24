import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Card from './src/component/Card';
import CardSection from './src/component/CardSection'


class DetailsScreen extends Component {

  state = {
    title: this.props.navigation.state.params.title,
    description: this.props.navigation.state.params.description,
    director: this.props.navigation.state.params.director,
    producer: this.props.navigation.state.params.producer,
    release_date: this.props.navigation.state.params.release_date,
    rt_score: this.props.navigation.state.params.rt_score
  }
  
  render() {
    //style
    const {
      headerTextStyle,
      headerContentStyle
    } = styles

    return (
      <View>
        <Card>
          <CardSection>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{this.state.title}</Text>
            </View>
          </CardSection>
          <CardSection>
            <Text>Description: {this.state.description}</Text>
          </CardSection>
          <CardSection>
            <Text>Director: {this.state.director}</Text>
          </CardSection>
          <CardSection>
            <Text>Producer: {this.state.producer}</Text>
          </CardSection>
          <CardSection>
            <Text>Release Date: {this.state.release_date}</Text>
          </CardSection>
          <CardSection>
            <Text>Rate: {this.state.rt_score}</Text>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = {

  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  headerTextStyle: {
    fontSize: 18
  }
}


export default DetailsScreen;