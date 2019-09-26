
import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/login';

const AuthStack =
  createSwitchNavigator(
    {
      Login: {
        screen: LoginScreen,
      },
    }
  );

export default AuthStack;
