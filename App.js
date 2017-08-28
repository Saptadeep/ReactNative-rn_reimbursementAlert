import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LotsOfGreetings } from './common/commonText.js';

// export default class App extends React.Component {
//
//       </LotsOfGreetings>
// }

const App = () => (
  <LotsOfGreetings />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
