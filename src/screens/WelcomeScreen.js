import React, {Component } from 'react';
import {StyleSheet, Image, Text, TouchableHighlight, Button} from 'react-native';

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  button_assistance() {
    const { navigate } = this.props.navigation;
    navigate('NeedHelp');
  }

  button_member() {
    const { navigate } = this.props.navigation;
    navigate('MemberPhoneNumberEntry');
  }

  button_info() {
    const { navigate } = this.props.navigation;
    navigate('Info');
  }

  render() {
    return (
      //<View source={styles.container} />
      <Image source={require('../../static/c2_blurred.png')} style={styles.backgroundImage}>
        <Text>Thank you for contacting Chaverim. Please choose one of the options below.</Text>
        <Button title="I need assistance" onPress={this.button_assistance.bind(this)}/>
        <Button title="I'm a member" onPress={this.button_member.bind(this)}/>
        <Button title="More Information" onPress={this.button_info.bind(this)}/>
      </Image>
    );
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

export default WelcomeScreen;