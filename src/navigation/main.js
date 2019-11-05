import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from '../screens/main';
import SecondaryScreen from '../screens/secondary';
import SettingsScreen from '../screens/settings';
import TabsScreen from '../screens/tabs';
import { navigationOptions, bottomTabNavigatorConfig } from './config';

import * as IconHelper from '../helpers/icons';

const HomeStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  },
  Secondary: {
    screen: SecondaryScreen,
  },
  Tabs: {
    screen: TabsScreen,
  }
});
HomeStack.navigationOptions = navigationOptions;

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      header: null,
    }
  },
  Secondary: {
    screen: SecondaryScreen,
  },
});
SettingsStack.navigationOptions = navigationOptions;

//TO BE REMOVED
//https://stackoverflow.com/a/57751055/3395884
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: componentWillMount']);

const MainStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => IconHelper.getIcon('home', tintColor),
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => IconHelper.getIcon('settings', tintColor),
      }
    }
  },
  bottomTabNavigatorConfig
)
export default MainStack;
