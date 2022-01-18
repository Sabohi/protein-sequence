import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { routes } from './routes';
import localization from './utils/localization';

export default class App extends React.PureComponent {
  renderTitle = () => (
    <Helmet>
      <title>{localization.header.projectHeader}</title>
    </Helmet>
  );

  render() {
    const { primaryLoader } = this.props;
    return (
      <>
        {this.renderTitle()}
        <ErrorBoundary>
          {primaryLoader && (
            <div id="preloader">
              <div id="loader" />
            </div>
          )}
          <Switch>{routes.map((route) => route)}</Switch>
        </ErrorBoundary>
      </>
    );
  }
}
App.propTypes = {
  // /**
  //  * Boolean representing loader state
  //  */
  primaryLoader: PropTypes.bool.isRequired,
};
