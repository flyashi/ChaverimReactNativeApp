import React, {Component } from 'react';
import {View, Image, Text, StyleSheet, ListView, RefreshControl, TouchableHighlight} from 'react-native';
import DataSource from '../data/DataSource';
import FakeDataBar from "../components/FakeDataBar";
import {formatPhoneNumber} from '../util/PhoneNumberUtils';

class PhoneCallsScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: 'Phone Calls'
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      refreshing: false,
      dataSource: ds.cloneWithRows(DataSource.phoneCalls()),
    };
  }

  fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  _onPressRow(rowData) {

  }

  _onPressCallButton(rowData) {

  }

  _renderRow(rowData) {
    return (
      <TouchableHighlight onPress={this._onPressRow.bind(this, rowData)}>
        <View style={styles.phoneNumberRow}>
          <Text style={styles.phoneNumberRowText}>{formatPhoneNumber(rowData)}</Text>
          <TouchableHighlight onPress={this._onPressCallButton.bind(this, rowData)}>
            <Image style={styles.phoneNumberRowRightImage} source={require('../../static/gray_question_mark.png')}/>
          </TouchableHighlight>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const no_calls = <Text>No phone calls.</Text>;
    //<View style={styles.container}>
    //  <Text>Phone Calls</Text>
    //  {no_calls}
    //  {calls}
    return (
      <View style={styles.container}>
        <FakeDataBar/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          style={styles.listStyle}
          contentContainerStyle={styles.phoneCallListContainer}
          refreshControl={<RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />}
          renderEmptyListComponent={() => no_calls}
          renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => <View style={styles.separator}/>}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  phoneNumberRowText: {
    fontSize: 24,
    marginLeft: 10,
    flex: 1,
  },
  phoneCallListContainer: {
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  phoneNumberRow: {
    // flex: 1,
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: '#bbbbbb'
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  phoneNumberRowRightImage: {
    height: 40,
    width: 40,
    marginRight: 6,
    margin: 5,
    alignSelf: 'center',
  },
  listStyle: {
    marginTop: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#bababa'
  }
});

export default PhoneCallsScreen;