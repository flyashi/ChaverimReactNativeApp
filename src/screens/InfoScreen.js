import React, {Component } from 'react';
import {Image, Text, StyleSheet} from 'react-native';

class InfoScreen extends Component {
  static navigationOptions = {
    title: 'Info',
  };
  render() {
    return (
      <Image source={require('../../static/c2_blurred.png')} style={styles.backgroundImage}>
        <Text>Chaverim is an all-volunteer emergency roadside assistance organization.</Text>
      </Image>
    )
  }
}


const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    //resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: Image.resizeMode.cover,
    width: null,
    height: null,
  },
});

export default InfoScreen;
