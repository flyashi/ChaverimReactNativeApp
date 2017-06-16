import React, {Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DataSource from '../data/DataSource';

class FakeDataBar extends Component {
  render() {
    if (DataSource.fake) {
      return <View style={styles.fakeDataHeader}>
          <Text style={styles.fakeDataText}>FAKE DATA</Text>
        </View>
    } else {
      return {}
    }
  }
}

const styles = StyleSheet.create({
  fakeDataHeader: {
    alignSelf: 'stretch',
    height: 20,
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
  fakeDataText: {
    color: 'red',
    fontWeight: 'bold'
  }
});

export default FakeDataBar;