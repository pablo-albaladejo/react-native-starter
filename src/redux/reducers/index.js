
import { combineReducers } from 'redux';
import auth from './auth';

import { navigationReducer } from '../../navigation';

export default combineReducers({
  nav: navigationReducer,
  auth,
});
