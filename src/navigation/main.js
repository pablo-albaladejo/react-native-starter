import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from '../screens/main';
import SecondaryScreen from '../screens/secondary';
import SettingsScreen from '../screens/settings';
import { navigationOptions } from './config';

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

const MainStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => IconHelper.getIcon('home', tintColor),
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => IconHelper.getIcon('settings', tintColor),
      }
    }
  }
)
export default MainStack;
