import React, {Component } from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import DataSource from '../data/DataSource';
import FakeDataBar from '../components/FakeDataBar';
import ExpandableCall from '../components/ExpandableCall';

class CallsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static orderedCalls() {
    const orderedCalls = [];
    return [...DataSource.openCalls(), ...DataSource.recentCalls(), ...DataSource.completedCalls()];
  }
  render() {
    let dispatch_button;

    if (DataSource.user().is_dispatcher) {
      dispatch_button =
          <View style={styles.dispatch_button}>
            <Image source={require('../../static/green plus.png')}
                   style={styles.dispatch_button_plus}/>
            <Text style={styles.dispatch_button_text}>Create New Call</Text>
          </View>
        // </View>
    }
    //
    // let open_calls = <Text>No Open Calls!</Text>;
    // if (DataSource.openCalls().length > 0) {
    //   //calls = <Text>Calls:{DataSource.calls().forEach(x => <Text>{x}</Text>)}</Text>
    //   open_calls = <Text>{JSON.stringify(DataSource.openCalls(), null, 2)}</Text>
    // }
    // let recent_calls = <Text>No Recent Calls!</Text>;
    // if (DataSource.recentCalls().length > 0) {
    //   recent_calls = <Text>{JSON.stringify(DataSource.recentCalls(), null, 2)}</Text>
    // }
    let calls = <Text>No Recent Calls!</Text>;
    const orderedCalls = CallsScreen.orderedCalls();
    if (orderedCalls.length > 0) {
      // calls = <Text>{JSON.stringify(orderedCalls, null, 2)}</Text>
      const expandable_call_obj_arr = [];
      orderedCalls.forEach(call => {
        expandable_call_obj_arr.push(<ExpandableCall call={call} key={call.uuid}/>);
        //expandable_call_obj_arr.push(<View style={{height: 50,borderWidth: 2, borderColor: 'green'}} key={call.uuid}/>);
      });
      calls = <View style={styles.expandableCallListContainer}>{expandable_call_obj_arr}</View>;
    }
    return (
      <View style={styles.container}>
        <FakeDataBar/>
        {dispatch_button}
        <ScrollView>
        {calls}
        </ScrollView>
        {/*<View style={styles.dividerWithText}>*/}
          {/*<Text style={styles.dividerText}>Open Calls</Text>*/}
        {/*</View>*/}
        {/*{open_calls}*/}
        {/*<View style={styles.dividerWithText}>*/}
          {/*<Text style={styles.dividerText}>Recent Calls</Text>*/}
        {/*</View>*/}
        {/*{recent_calls}*/}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //resizeMode: 'cover', // or 'stretch'
    // justifyContent: 'center',
    // alignItems: 'center',
    // resizeMode: Image.resizeMode.cover,
    marginTop: 20,
  },
  dispatch_button: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    margin: 15,
  },
  dispatch_button_plus: {
    resizeMode: Image.resizeMode.contain,
    height: 32,
    width: 32,
    alignSelf: 'center',
    marginLeft: 10
  },
  dispatch_button_text: {
    alignSelf: 'center',
    paddingLeft: 20,
    fontSize: 16,
  },
  dividerWithText: {
    alignSelf: 'stretch',
    height: 20,
    backgroundColor: 'purple',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  dividerText: {
    color: 'white'
  },
  expandableCallListContainer: {
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default CallsScreen;