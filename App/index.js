import React from 'react';

//Components given by React Native
import { StyleSheet, Text, View } from 'react-native';

//Class that extends React "Component"
//It can also be imported by 'import React, {Component} from 'react'

import Router from './Router'

export default class App extends React.Component {
  render() {
    return (
      <Router />
    );
  }
}

// Constant that will have pre-set of style
const styles = StyleSheet.create({
// Name of property of our content
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
      fontSize: 25,
      color: 'red',
  },
});
