import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from '../screens/main';
import SecondaryScreen from '../screens/secondary';
import SettingsScreen from '../screens/settings';
import { navigationOptions } from './config';

import Ionicons from 'react-native-vector-icons/Ionicons';

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


const HomeIcon = ({ tintColor }) => {
  const prefix = Platform.OS === 'ios' ? 'ios' : 'md';
  return <Ionicons name={prefix + '-home'} size={25} color={tintColor} />;
}
HomeIcon.propTypes = {
  tintColor: PropTypes.string,
}

const SettingsIcon = ({ tintColor }) => {
  const prefix = Platform.OS === 'ios' ? 'ios' : 'md';
  return <Ionicons name={prefix + '-settings'} size={25} color={tintColor} />;
}
SettingsIcon.propTypes = {
  tintColor: PropTypes.string,
}

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: HomeIcon,
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarIcon: SettingsIcon,
      }
    }
  }
)
export default createAppContainer(RootStack);
