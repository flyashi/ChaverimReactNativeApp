import React, {Component } from 'react';
import {Image, Button, View, Text, TextInput, StyleSheet} from 'react-native';
import DataSource from '../data/DataSource';
import {isInitiateFakeDataPhoneNumber} from '../util/PhoneNumberUtils';

class MemberPhoneNumberEntryScreen extends Component {
  static navigationOptions = {
    title: 'I\'m a Member'
  };

  constructor() {
    super();
    this.state = {
      phoneNumberValid: false,
      text: ''
    };
  }

  _onNumberEntered(text) {
    if (isInitiateFakeDataPhoneNumber(text)) {
      DataSource.turnOnFakeData();

      const {navigate} = this.props.navigation;
      navigate('Main');
    }
    if (text.length >= 10) {
      this.setState({phoneNumberValid: true, text});
    } else {
      this.setState({phoneNumberValid: false, text});
    }
  }

  _onTextMePressed() {
    const { navigate } = this.props.navigation;
    navigate('MemberPhoneNumberVerify');
  }

  render() {
    return (
      <Image source={require('../../static/c2_blurred.png')} style={styles.backgroundImage}>
        <Text style={styles.textPrompt}>Enter your phone number:</Text>
        {/*<View style={styles.phoneNumberContainer}>*/}
          <TextInput returnKeyType={ 'done' }
                     ref='phoneNumber'
                     style={styles.phoneNumberInput}
                     onChangeText={this._onNumberEntered.bind(this)}/>
        {/*</View>*/}
        <Button title='Text Me' disabled={!this.state.phoneNumberValid} onPress={this._onTextMePressed.bind(this)} />
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
    flexDirection: 'column',
  },
  textPrompt: {
    fontSize: 26
  },
  phoneNumberContainer: {
    borderWidth: 1,
    borderBottomColor: 'white',
    borderTopColor: '#272727',
    borderLeftColor: '#272727',
    borderRightColor: '#272727',
    marginLeft: 20,
    marginRight: 20,
  },
  phoneNumberInput: {
    height: 40,
    color: 'black',
    paddingRight: 8,
    paddingLeft: 8,
    fontSize: 40,
    textAlign: 'center'
  },
});

export default MemberPhoneNumberEntryScreen;
