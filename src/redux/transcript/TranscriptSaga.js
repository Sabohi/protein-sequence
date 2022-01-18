/**
 * Transcript Saga File
 * @author Sabohi Zaidi <sabuhizaidi616@gmail.com>
 * @description Transcript saga helpers
 * @generator
 */

import { call, put, takeEvery } from 'redux-saga/effects';
import { checkEmpty, getUrl } from '@/utils/commonFunctions/CommonFunctions';
import { GLOBALCONSTANTS } from '@/utils/GlobalConstants';
import { getAPIData } from '@/utils/webServiceHandler';
import loaderConstants from '../loaderService/LoaderConstants';
import { transcriptConstants } from './TranscriptConstants';

const success = (type, payload) => ({
  type,
  payload,
});

const failure = (type, error) => ({
  type,
  error,
});

/**
 * @summary Gene info list fetcher.
 * @description  Fetches gene info list based on species and symbol.
 * @param {Object} paramObj - Contains species, symbol
 * @author Sabohi Zaidi <sabuhizaidi616@gmail.com>
 * @async
 */
const geneInfoListService = async ({ paramObj }) => {
  try {
    const { geneInfoBySymbol } = GLOBALCONSTANTS.URLS;
    const customUrl = geneInfoBySymbol.replace('%SYMBOL%', paramObj?.symbol);
    const url = getUrl(customUrl);
    const data = await getAPIData(url);
    return { response: data };
  } catch (error) {
    return { error };
  }
};

const geneInfoListWorkerSaga = async (params) => {
  const { paramObj, transcript } = !checkEmpty(params) ? params : {};
  const promises = [];
  transcript.forEach(async (item) => {
    Object.assign(paramObj, {
      item,
    });
    if (item?.id) {
      promises.push(getTranscriptByIdService(paramObj));
    }
  });
  const returnArr = [];
  await Promise.allSettled(promises).then((results) =>
    results.forEach((result) => {
      if (!checkEmpty(result?.value)) {
        returnArr.push(result.value);
      }
    }),
  );
  return returnArr;
};

/**
 * @author Sabohi Zaidi <sabuhizaidi616@gmail.com>
 * @description  Helper saga to to fetch gene info list based on species and symbol.
 * @param {Object} action - Contains action type and payload
 * @generator
 */
export function* geneInfoListSaga(action) {
  const { response, error } = yield call(geneInfoListService, action.payload);
  if (response.type === 'error') {
    yield put(yield call(failure, transcriptConstants.GENE_INFO_FAILURE, response || error));
    yield put({ type: loaderConstants.LOADER_STOP_REQUEST });
  } else {
    const paramObj = { letter: action?.payload?.paramObj?.letter, position: action?.payload?.paramObj?.position };
    const responseRetrieved = { ...response };
    const { Transcript } = !checkEmpty(responseRetrieved) ? responseRetrieved : {};
    const params = { paramObj, transcript: Transcript };
    let ret = [];
    if (!checkEmpty(Transcript)) {
      ret = yield call(geneInfoListWorkerSaga, params);
    }

    yield put(yield call(success, transcriptConstants.GENE_INFO_SUCCESS, ret));
    yield put({ type: loaderConstants.LOADER_STOP_REQUEST });
  }
}

/**
 * @author Sabohi Zaidi <sabuhizaidi616@gmail.com>
 * @description Fetch gene info list watcher saga that watches for action
 * dispatched to store and calls the worker saga to fulfill the task given
 * @generator
 */
export function* geneInfoListWatcher() {
  yield takeEvery(transcriptConstants.GENE_INFO_REQUEST, geneInfoListSaga);
}

/**
 * @summary Transcript info fetcher.
 * @description  Fetches transcript info based on id.
 * @param {Object} paramObj - Contains id
 * @author Sabohi Zaidi <sabuhizaidi616@gmail.com>
 * @async
 */
const getTranscriptByIdService = async ({ item, position, letter }) => {
  try {
    const { getTranscriptById } = GLOBALCONSTANTS.URLS;
    const { id } = !checkEmpty(item) ? item : {};
    const customUrl = getTranscriptById.replace('%ID%', id);
    const url = getUrl(customUrl);
    const data = await getAPIData(url);
    const responseRetrieved = { ...data };
    const responseSequence = responseRetrieved?.seq;
    if (responseSequence && responseSequence[position] === letter) {
      return item;
    }
    return false;
  } catch (error) {
    return { error };
  }
};

/**
 * @author Sabohi Zaidi <sabuhizaidi616@gmail.com>
 * @description  Helper saga to to fetch transcript info based on id.
 * @param {Object} action - Contains action type and payload
 * @generator
 */
export function* getTranscriptByIdSaga(action) {
  const { response, error } = yield call(getTranscriptByIdService, action.payload);
  if (!checkEmpty(response) && response?.response?.status) {
    yield put(yield call(success, transcriptConstants.GET_TRANSCRIPT_SUCCESS, response.response));
    yield put({ type: loaderConstants.LOADER_STOP_REQUEST });
  } else {
    yield put(yield call(failure, transcriptConstants.GET_TRANSCRIPT_FAILURE, response || error));
    yield put({ type: loaderConstants.LOADER_STOP_REQUEST });
  }
}

/**
 * @author Sabohi Zaidi <sabuhizaidi616@gmail.com>
 * @description Fetch transcript info watcher saga that watches for action
 * dispatched to store and calls the worker saga to fulfill the task given
 * @generator
 */
export function* getTranscriptByIdWatcher() {
  yield takeEvery(transcriptConstants.GET_TRANSCRIPT_REQUEST, getTranscriptByIdSaga);
}
