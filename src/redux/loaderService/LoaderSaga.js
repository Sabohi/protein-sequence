import { call, put, takeEvery } from 'redux-saga/effects';
import loaderConstants from './LoaderConstants';

const success = (type, loaderType) => ({
  type,
  payload: loaderType,
});

export function* loaderStartSaga() {
  yield put(yield call(success, loaderConstants.LOADER_START_SUCCESS));
}

export function* loaderStartWatcher() {
  yield takeEvery(loaderConstants.LOADER_START_REQUEST, loaderStartSaga);
}

export function* loaderStopSaga() {
  yield put(yield call(success, loaderConstants.LOADER_STOP_SUCCESS));
}

export function* loaderStopWatcher() {
  yield takeEvery(loaderConstants.LOADER_STOP_REQUEST, loaderStopSaga);
}
