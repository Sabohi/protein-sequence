import { connect } from 'react-redux';
import App from '@/App';

const mapStateToProps = (state) => {
    const { primaryLoader } = state.loaderReducer;
  
    return {
      primaryLoader,
    };
  };
export default connect(mapStateToProps)(App);
