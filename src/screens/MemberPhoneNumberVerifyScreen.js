import React, {Component } from 'react';
import {Image, Button, View, Text, TextInput, StyleSheet} from 'react-native';
import DataSource from '../data/DataSource';

class MemberPhoneNumberVerifyScreen extends Component {
  static navigationOptions = {
    title: 'I\'m a Member'
  };

  constructor() {
    super();
    this.state = {
      verifyCodeValid: false
    }
  }
  _onCodeEntered(text) {
    if (text.length >= 4) {
      this.setState({verifyCodeValid: true, text});
    } else {
      this.setState({verifyCodeValid: false, text});
    }
  }

  _onVerifyPressed() {
    const { navigate } = this.props.navigation;
    navigate('Main');
  }

  componentWillMount() {
    if (DataSource.fake) {
      const { navigate } = this.props.navigation;
      navigate('Main');
    }
  }

  render() {
    return (
      <Image source={require('../../static/c2_blurred.png')} style={styles.backgroundImage}>
        <Text>Enter your verification code:</Text>
        <TextInput returnKeyType={ 'done' }
                   ref='phoneNumber'
                   style={styles.codeInput}
                   onChangeText={this._onCodeEntered.bind(this)}/>
        <Button title='Verify' disabled={!this.state.verifyCodeValid} onPress={this._onVerifyPressed.bind(this)} />
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
  codeInput: {
    height: 40,
    color: 'white',
    paddingRight: 8,
    paddingLeft: 8,
  },
});

export default MemberPhoneNumberVerifyScreen;
