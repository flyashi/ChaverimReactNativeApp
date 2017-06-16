import { TabNavigator } from "react-navigation";
import CallsScreen from './CallsScreen';
import PhoneCallsScreen from './PhoneCallsScreen';
import SettingsScreen from './SettingsScreen';


const MainScreenNavigator = TabNavigator({
  Calls: {screen: CallsScreen},
  PhoneCalls: {screen: PhoneCallsScreen},
  Settings: {screen: SettingsScreen}
},
  {swipeEnabled: true,
  tabBarOptions: {
    labelStyle: {
      fontSize: 14,
      paddingBottom: 15
    },
  }},
  );

MainScreenNavigator.navigationOptions = {
  // title: 'Chaverim'
  headerMode: 'screen'
};

export default MainScreenNavigator;