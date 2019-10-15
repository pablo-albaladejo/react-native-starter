import { all, fork } from 'redux-saga/effects';
import { watchUserLoginProcess } from './auth';

export default function* rootSaga() {
  yield all([
    fork(watchUserLoginProcess),
  ])
}
