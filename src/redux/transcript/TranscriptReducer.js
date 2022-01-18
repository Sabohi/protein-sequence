/**
 * Transcript Reducer File
 * @author Sabohi Zaidi
 * @description Transcript
 *  reducer
 */

import { sagaError } from '@/utils/commonFunctions/CommonFunctions';
import { transcriptConstants } from './TranscriptConstants';

const initialState = {
  transcriptList: [],
  transcriptError: {},
};

export default function transcriptReducer(state = initialState, action = {}) {
  switch (action?.type) {
    case transcriptConstants.GENE_INFO_REQUEST:
    case transcriptConstants.GENE_INFO_FAILURE:
      return {
        ...state,
        transcriptList: [],
        transcriptError: sagaError(action?.error || action.response),
      };
    case transcriptConstants.GENE_INFO_SUCCESS:
      return {
        ...state,
        transcriptList: action.payload || [],
        transcriptError: {},
      };
    case transcriptConstants.GENE_INFO_RESET:
      return{
        ...initialState
      }
    default:
      return { ...state };
  }
}
