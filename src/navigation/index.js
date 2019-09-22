import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../screens/main';
import SecondaryScreen from '../screens/secondary';

const AppNavigator = createStackNavigator({
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

export default createAppContainer(AppNavigator);
