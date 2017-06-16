import React, {Component } from 'react';
import {View, Text, StyleSheet, Shape, Image, TouchableWithoutFeedback, TouchableHighlight, ScrollView} from 'react-native';

import CallCategories from '../data/CallCategories';
import DataSource from '../data/DataSource'
import {colorForCall} from '../util/CallUtils';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class ExpandableCall extends Component {

  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  callInfo() {
    const call_info = this.props.call || DataSource.calls(this.props.call_uuid) || {};
    return call_info;
  }
  onExpand() {
    this.setState({expanded: true});
  }

  onUnexpand() {
    this.setState({expanded: false});
  }

  _onCoverPressed() {
    console.log(`User ${DataSource.user().name} covering call ${this.callInfo().uuid}`);
  }

  _onCancelPressed() {
    console.log(`User ${DataSource.user().name} canceled call ${this.callInfo().uuid}`);
  }

  _onReopenPressed() {
    console.log(`User ${DataSource.user().name} reopened call ${this.callInfo().uuid}`)
  }

  _onMergePressed() {
    console.log(`User ${DataSource.user().name} merged call ${this.callInfo().uuid}`)
  }

  _onSharePressed() {
    console.log(`User ${DataSource.user().name} shared call ${this.callInfo().uuid}`)
  }

  _onEditPressed() {
    console.log(`User ${DataSource.user().name} edited call ${this.callInfo().uuid}`)
  }

  _onDeletePressed() {
    console.log(`User ${DataSource.user().name} deleted call ${this.callInfo().uuid}`)
  }

  _onDispatchPressed() {
    console.log(`User ${DataSource.user().name} dispatched call ${this.callInfo().uuid}`)
  }

  _getBottomButtons() {
    const call_info = this.callInfo();
    /**
     * All possible buttons:
     *  - Dispatch (whatever that means)
     *  - Cover
     *  - Cancel
     *  - Reopen
     *  - More Info
     *   - delete
     *   - merge
     *   - share
     *   - edit
     *  - Request Backup
     */
    const user_info = DataSource.user();
    const showCover = user_info.is_responder && call_info.isOpen;
    const showCancel = user_info.is_dispatcher && call_info.isOpen;
    const showReopen = user_info.is_dispatcher && call_info.isCanceled;
    const showDelete = user_info.is_admin;
    const showMerge = user_info.is_admin;
    const showShare = user_info.is_dispatcher && true; // TODO(yakov): SHARING_ENABLED
    const showEdit = user_info.is_dispatcher;
    const showDispatch = user_info.is_dispatcher && call_info.isOpen;
    const button_array = [];

    const makeButton = (text, onPress) => <TouchableHighlight onPress={onPress} style={styles.callActionButton} key={text}><Text style={styles.callActionButtonText}>{text}</Text></TouchableHighlight>;

    if (showCover) {
      button_array.push(makeButton("Cover", this._onCancelPressed.bind(this)));
    }
    if (showCancel) {
      button_array.push(makeButton("Cancel", this._onCancelPressed.bind(this)));
    }
    if (showReopen) {
      button_array.push(makeButton("Reopen", this._onReopenPressed.bind(this)));
    }
    if (showDelete) {
      button_array.push(makeButton("Delete", this._onDeletePressed.bind(this)));
    }
    if (showMerge) {
      button_array.push(makeButton("Merge", this._onMergePressed.bind(this)));
    }
    if (showShare) {
      button_array.push(makeButton("Share", this._onSharePressed.bind(this)));
    }
    if (showEdit) {
      button_array.push(makeButton("Edit", this._onEditPressed.bind(this)));
    }
    if (showDispatch) {
      button_array.push(makeButton("Dispatch", this._onDispatchPressed.bind(this)));
    }
    return (<ScrollView horizontal={true} bounces={false} contentContainerStyle={styles.callActionButtonArea}>{button_array}</ScrollView>);
  }

  render() {
    const call_info = this.props.call || DataSource.calls(this.props.call_uuid) || {};
    let color = colorForCall(call_info);
    if (!this.state.expanded) {
      return (
          <TouchableHighlight onPress={this.onExpand.bind(this)}>
            <View style={styles.outerStyle}>
              <Image style={styles.leftImage} source={require('../../static/gray_question_mark.png')}/>
              <View style={styles.infoSection}>
                <Text style={styles.infoHeader}>{CallCategories[call_info.categoryID].name}</Text>
              </View>
              <Image style={[styles.rightImage, {tintColor: color}]} source={require('../../static/gray_question_mark.png')}/>
            </View>
          </TouchableHighlight>
      )
    } else {
      const top_bar =
        <TouchableHighlight onPress={this.onUnexpand.bind(this)}>
          <View style={styles.outerStyle}>
            <Image style={styles.leftImage} source={require('../../static/gray_question_mark.png')}/>
            <View style={styles.infoSection}>
              <Text style={styles.infoHeader}>{CallCategories[call_info.categoryID].name}</Text>
            </View>
            <Image style={[styles.rightImage, {tintColor: color}]} source={require('../../static/gray_question_mark.png')}/>
          </View>
        </TouchableHighlight>;
      const divider = <View style={styles.divider}/>;
      const name_number_call_button = <View/>;
      const map = call_info.lat ? <MapView
        // provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: call_info.lat,
          longitude: call_info.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapView.Marker coordinate={{
          latitude: call_info.lat,
          longitude: call_info.lng,
        }}/>
      </MapView> : <View/>;
      const bottom_buttons = this._getBottomButtons();
      return (
        <View style={styles.expandedOuterStyle}>
          {top_bar}
          {name_number_call_button}
          {map}
          {bottom_buttons}
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  outerStyle: {
    // flex: 1,
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: '#bbbbbb'
    borderBottomWidth: 1,
    borderBottomColor: '#bababa'
  },
  leftImage: {
    height: 40,
    width: 40,
    marginLeft: 6,
    alignSelf: 'center',
  },
  infoSection: {
    flexDirection: 'column',
    marginLeft: 10,
    alignSelf: 'stretch'
  },
  infoHeader: {
    fontSize: 16
  },
  rightImage: {
    height: 40,
    width: 40,
    marginRight: 6,
    alignSelf: 'center',
    position: 'absolute',
    right: 6
  },
  expandedOuterStyle: {
    backgroundColor: 'white',
    height: 300,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#bababa',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#aaaaaa',
    alignSelf: 'stretch'
  },
  mapStyle: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 200,
  },
  callActionButtonArea: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  callActionButton: {
    flexDirection: 'column',
    // Padding is the clickable area around the text
    paddingLeft: 10,
    paddingRight: 10,
    // Margin is the non-clickable area around the clickable area
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
  },
  callActionButtonText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default ExpandableCall;