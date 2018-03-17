import React from 'react';

//Components given by React Native
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base'
//Class that extends React "Component"
//It can also be imported by 'import React, {Component} from 'react'

export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Icon name={"md-search"}/>
        <Text style={styles.title}>Search</Text>
      </View>
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
