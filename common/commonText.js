import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text >Hello {this.props.name}!</Text>
    );
  }
}
export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center',paddingTop: 115}}>
        <Greeting name='Guido' />
        <Greeting name='Mama' />
        <Greeting name='Papa' />
        <Greeting name='Nanu' />
        <Greeting name='Thammi' />
        <Greeting name='Sangvi Didi' />
      </View>
    );
  }
}
