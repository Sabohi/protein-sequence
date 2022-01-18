import loaderConstants from './LoaderConstants';

const initialState = {
  primaryLoader: false,
};

export default function loaderReducer(state = initialState, action = {}) {
  switch (action.type) {
    case loaderConstants.LOADER_START_SUCCESS:
      return {
        ...state,
        primaryLoader: true,
      };
    case loaderConstants.LOADER_STOP_SUCCESS:
      return {
        ...state,
        primaryLoader: false,
      };
    default:
      return { ...state };
  }
}
