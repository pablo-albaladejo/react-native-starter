
import { combineReducers } from 'redux';
import modal from './modal';
import toast from './toast';
import datepicker from './datepicker';

export default combineReducers({
  modal,
  toast,
  datepicker
});
