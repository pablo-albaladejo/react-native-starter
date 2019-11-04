import { takeLatest } from 'redux-saga/effects'

import { ON_MODAL_CLOSE } from '../../actions/ui/modal'

export function* modalClosedProcess({ payload: { cb } }) {
  if (cb) yield cb();
}

export function* watchModalClosedProcess() {
  yield takeLatest(ON_MODAL_CLOSE, modalClosedProcess)
}
