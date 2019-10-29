import { connect } from 'react-redux';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {
  createReduxContainer,
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

import MainStack from './main';
import AuthStack from './auth';
import AuthLoadingScreen from '../screens/auth/';

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: {
        screen: AuthStack,
      },
      Main: {
        screen: MainStack,
      },
    })
);
const mapStateToProps = (state) => ({
  state: state.nav,
});

export const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);
export const navigationReducer = createNavigationReducer(AppNavigator);
export const AppWithNavigationState = connect(mapStateToProps)(createReduxContainer(AppNavigator));
