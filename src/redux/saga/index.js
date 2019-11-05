import { all, fork } from 'redux-saga/effects';
import { watchUserLoginProcess, watchUserLogoutProcess } from './auth';
import { watchModalClosedProcess } from './ui/modal';
import { watchToastClosedProcess } from './ui/toast';

export default function* rootSaga() {
  yield all([
    fork(watchUserLoginProcess),
    fork(watchUserLogoutProcess),
    fork(watchModalClosedProcess),
    fork(watchToastClosedProcess),
  ])
}
