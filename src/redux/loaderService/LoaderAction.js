import loaderConstants from './LoaderConstants';

export const loaderStartAction = () => ({
  type: loaderConstants.LOADER_START_REQUEST,
});

export const loaderStopAction = () => ({
  type: loaderConstants.LOADER_STOP_REQUEST,
});

export const locallLoaderStartAction = (type) => ({
  type: loaderConstants.LOCAL_LOADER_START_REQUEST,
  payload: type,
});

export const localLoaderStopAction = (type) => ({
  type: loaderConstants.LOCAL_LOADER_STOP_REQUEST,
  payload: type,
});
