import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from '../screens/main';
import SecondaryScreen from '../screens/secondary';
import SettingsScreen from '../screens/settings';
import { navigationOptions } from './config';

const HomeStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
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

const RootStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  }
)
export default createAppContainer(RootStack);
