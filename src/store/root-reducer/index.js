import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import transcriptReducer from '@/redux/transcript/TranscriptReducer';
import loaderReducer from '@/redux/loaderService/LoaderReducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    loaderReducer,
    transcriptReducer,
  });
