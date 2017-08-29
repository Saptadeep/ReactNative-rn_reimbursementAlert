import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import LotsOfGreetings  from './common/commonText';

export default class First extends Component {
  render() {
    return (
      <LotsOfGreetings />
    )
  }
}
// const App = () => (
//   <View>
//
//   <LotsOfGreetingsss />
//   </ View>
//
// );

// class Greeting extends Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }
//
// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//       </View>
//     );
//   }
// }
