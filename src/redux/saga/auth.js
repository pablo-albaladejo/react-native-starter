import { put, takeLatest, call } from 'redux-saga/effects'
import { USER_LOGIN, setAuth } from '../actions/auth'

export function* userLoginProcess({ payload }) {
  yield call([console, console.log], 'userLoginProcess payload ' + JSON.stringify(payload))
  yield put(setAuth({ jwt: 'user_jwt' }))
}
export function* watchUserLoginProcess() {
  yield takeLatest(USER_LOGIN, userLoginProcess)
}
