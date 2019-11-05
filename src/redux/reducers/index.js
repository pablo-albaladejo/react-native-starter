
import { combineReducers } from 'redux';
import auth from './auth';
import ui from './ui';
import loading from './loading'

import { navigationReducer } from '../../navigation';

export default combineReducers({
  nav: navigationReducer,
  loading,
  auth,
  ui
});
