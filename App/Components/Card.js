import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Cards extends Component {
  render() {
    const { item } = this.props
    return (
      
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}} />
                <Body>
                  <Text>{item.title}</Text>
                  <Text note>{item.original_title}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={{  backgroundColor: 'black' }}>
              <Image source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}} style={{height: 200, width: null, flex: 1}} resizeMode={'contain'}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>{ item.vote_count }</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="ios-heart" color={'red'} />
                  <Text>{ item.popularity }</Text>
                </Button>
              </Body>
              <Right>
                <Text>{ item.release_date }</Text>
              </Right>
            </CardItem>
          </Card>
    );
  }
}