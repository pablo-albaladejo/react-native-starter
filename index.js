import { AppRegistry } from 'react-native';
import App from './src/redux/store';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
