
import { combineReducers } from 'redux';
import auth from './auth';
import ui from './ui';

import { navigationReducer } from '../../navigation';

export default combineReducers({
  nav: navigationReducer,
  auth,
  ui
});
