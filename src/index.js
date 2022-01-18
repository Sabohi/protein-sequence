import '@/utils/polyfills';
import 'jquery/src/jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min';
import '@/styles/scss/main.scss';
import 'react-tiny-fab/dist/styles.css';
import 'rc-dialog/assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import App from '@/containers/App';
import history from '@/routes/History';
import { persistor, store } from '@/store';
import * as serviceWorkerRegistration from '@/serviceWorkerRegistration';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// Registers for service worker
serviceWorkerRegistration.register();
