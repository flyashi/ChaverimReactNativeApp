import React, {Component } from 'react';
import {View, Image, Text, StyleSheet, TouchableHighlight} from 'react-native';
import DataSource from '../data/DataSource';
import {setAuthToken} from '../data/DataStore';
import FakeDataBar from "../components/FakeDataBar";
import { NavigationActions } from 'react-navigation';

class SettingsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  _onLogoutPressed() {
    setAuthToken('').then(() => {
      DataSource.authToken = '';
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Welcome'})
        ]
      });
      this.props.navigation.dispatch(resetAction);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FakeDataBar/>
        <Text>Name: {DataSource.user().name}</Text>
        <Text>Auth Token: {DataSource.authToken}</Text>
        <TouchableHighlight onPress={this._onLogoutPressed.bind(this)}>
          <View style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20
  },
});

export default SettingsScreen;