import React from 'react';

//Components given by React Native
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Icon } from 'native-base'
import Cards from '../Components/Card'
import axios from 'axios'
//Class that extends React "Component"
//It can also be imported by 'import React, {Component} from 'react'
//7dd57cb7940e8158cea25dc1979d4b2d
export default class TopRated extends React.Component {
    state = {
        movies: null
    }
componentDidMount(){
    axios({
     method: "GET",
        url: "https://api.themoviedb.org/3/movie/top_rated?api_key=7dd57cb7940e8158cea25dc1979d4b2d",
    })
    .then(({ data }) => {
        this.setState({ movies: data.results })
    })
}
_keyExtractor = item => item.id
_renderItem = ({item}) => {
    return <Cards item={item} key={item.id}/>
}
  render() {
    return (
        <FlatList
        data={this.state.movies}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
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

});
