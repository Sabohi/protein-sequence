import { transcriptConstants } from './TranscriptConstants';

export const geneInfoBySymbolAction = (paramObj) => ({
  type: transcriptConstants.GENE_INFO_REQUEST,
  payload: { paramObj },
});

export const resetAction = () => ({
  type: transcriptConstants.GENE_INFO_RESET,
  payload: {},
});

export const getTranscriptByIdAction = ({ id }) => ({
  type: transcriptConstants.GET_TRANSCRIPT_REQUEST,
  payload: { id },
});