import { connect } from 'react-redux';
import Proteins from '@/components/Proteins';

const mapStateToProps = (state) => {
  const { transcriptList, transcriptError } = state.transcriptReducer;
  const { primaryLoader } = state.loaderReducer;

  return {
    transcriptList,
    transcriptError,
    primaryLoader,
  };
};
export default connect(mapStateToProps)(Proteins);
