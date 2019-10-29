import { put, takeLatest, call } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation';

import { USER_LOGIN, setAuth, USER_LOGOUT } from '../actions/auth'

//LOGIN
export function* userLoginProcess({ payload }) {
  yield call([console, console.log], 'userLoginProcess payload ' + JSON.stringify(payload))
  yield put(setAuth({ jwt: 'user_jwt' }))
  yield put(NavigationActions.navigate({routeName: 'Main'}))
}
export function* watchUserLoginProcess() {
  yield takeLatest(USER_LOGIN, userLoginProcess)
}

export function* userLogoutProcess() {
  yield put(setAuth({ jwt: null}))
  yield put(NavigationActions.navigate({routeName: 'AuthLoading'}))
}
export function* watchUserLogoutProcess() {
  yield takeLatest(USER_LOGOUT, userLogoutProcess)
}
