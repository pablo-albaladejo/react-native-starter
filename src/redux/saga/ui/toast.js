import { takeLatest } from 'redux-saga/effects'

import { ON_TOAST_CLOSE } from '../../actions/ui/toast'

export function* toastClosedProcess({ payload: { cb } }) {
  if (cb) yield cb();
}

export function* watchToastClosedProcess() {
  yield takeLatest(ON_TOAST_CLOSE, toastClosedProcess)
}
