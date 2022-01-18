import { all } from 'redux-saga/effects';
import { loaderStartWatcher, loaderStopWatcher } from '@/redux/loaderService/LoaderSaga';
import { 
  geneInfoListWatcher,
  getTranscriptByIdWatcher,
} from '@/redux/transcript/TranscriptSaga';

export default function* rootSaga() {
  yield all([
    loaderStopWatcher(),
    loaderStartWatcher(),
    geneInfoListWatcher(),
    getTranscriptByIdWatcher(),
  ]);
}
