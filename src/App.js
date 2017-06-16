
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import LoadingScreen from './screens/LoadingScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import InfoScreen from './screens/InfoScreen';
import MemberPhoneNumberEntryScreen from './screens/MemberPhoneNumberEntryScreen';
import MemberPhoneNumberVerifyScreen from './screens/MemberPhoneNumberVerifyScreen';
import MainScreen from './screens/MainScreenNavigator';
import NeedHelpScreen from './screens/NeedHelpScreen';

const ChaverimReactNativeApp = StackNavigator({
  Loading: {screen: LoadingScreen},
  Welcome: {screen: WelcomeScreen},
  Info: {screen: InfoScreen},
  MemberPhoneNumberEntry: {screen: MemberPhoneNumberEntryScreen},
  MemberPhoneNumberVerify: {screen: MemberPhoneNumberVerifyScreen},
  Main: {screen: MainScreen},
  NeedHelp: {screen: NeedHelpScreen},
},
  { headerMode: 'screen' });

AppRegistry.registerComponent('ChaverimReactNativeApp', () => ChaverimReactNativeApp);



//
// export default class ChaverimReactNativeApp extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#C5CCCF'//'#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });



