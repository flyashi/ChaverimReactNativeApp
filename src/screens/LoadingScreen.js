import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {fetchAuthToken} from '../data/DataStore';
import {loginWithAuthToken} from '../api/Login';

export default class LoadingScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  loadWelcome() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Welcome'})
      ]
    });
    console.log('Firing resetAction to load Welcome route');
    this.props.navigation.dispatch(resetAction);
  }

  loadMain() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main'})
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  componentDidMount() {
    console.log('Fetching auth token...');
    fetchAuthToken().then((authToken) => {
      console.log(`AuthToken: ${authToken}`);
      if (authToken) {
        loginWithAuthToken(authToken).then(() => {
          this.loadMain();
        });
      } else {
        console.log('Loading welcome...');
        this.loadWelcome()
      }
    }).catch(() => {
      this.loadWelcome();
    });
  }

  render() {
    return (<View>
      <Text>Please wait...</Text>
    </View>)
  }
}