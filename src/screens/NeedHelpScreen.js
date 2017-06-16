import React, {Component } from 'react';
import {Image, Text, StyleSheet, SectionList, View} from 'react-native';

import {formatPhoneNumber} from '../util/PhoneNumberUtils'

class NeedHelpScreen extends Component {
  static navigationOptions = {
    title: 'Info',
  };

  _renderRow(item) {
    const title = item.item.key;
    const number = formatPhoneNumber(item.item.number);
    return (
      <View style={styles.row} key={title}>
        <Text style={styles.rowText}>{title} - {number}</Text>
      </View>
    )
  }

  _renderSectionHeader(section) {
    return <Text style={styles.sectionHeader} key={section.section.key}>{section.section.key}</Text>
  }

  render() {

    const sections = [
      {
        key: 'New Jersey',
        data: [
          {key: 'Lakewood', number: '7323702229'},
          {key: 'Passaic', number: '9735551212'},
          {key: 'Teaneck', number: '2018004357'},
          {key: 'Jersey Shore', number: '8565555555'},
          {key: 'Union City', number: '2222222222'},
          {key: 'Union County', number: '3333333333'},
        ],

      },
      {
        key: 'New York',
        data: [
          {key: 'Brooklyn', number: '7184318181'},
          {key: 'Catskills', number: '7184318181'},
          {key: 'Crown Heights', number: '7185555555'},
          {key: 'Manhattan', number: '7184318181'},
          {key: 'Queens', number: '7184410505'},
          {key: 'Five Towns', number: '7183371800'},
          {key: 'Far Rockaway', number: '7183371800'},

        ]
      }
    ];


    return (
      <Image source={require('../../static/c2_blurred.png')} style={styles.backgroundImage}>
        <Text style={styles.infoTextStyle}>Every Chaverim organization is independent. Please choose the organization closest to you. If you are not near any organization, contact the one where you're from and they will contact Interstate Chaverim for you.</Text>
        <SectionList
          renderItem={this._renderRow.bind(this)}
          renderSectionHeader={this._renderSectionHeader.bind(this)}
          sections={sections}
        />
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
  row: {
    backgroundColor: 'white',
  },
  sectionHeader: {
    backgroundColor: 'yellow',
  },
});

export default NeedHelpScreen;
