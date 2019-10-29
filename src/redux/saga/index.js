import { all, fork } from 'redux-saga/effects';
import { watchUserLoginProcess, watchUserLogoutProcess } from './auth';

export default function* rootSaga() {
  yield all([
    fork(watchUserLoginProcess),
    fork(watchUserLogoutProcess)
  ])
}
