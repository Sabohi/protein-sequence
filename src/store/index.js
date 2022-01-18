import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import history from '@/routes/History';
import rootReducer from './root-reducer';
import sagas from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];

const persistConfig = {
  storage,
  key: 'root',
  blacklist: ['loaderReducer', 'transcriptReducer'],
};

const composeEnhancers = (process.env.NODE_ENV === 'development' && window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));

const persistor = persistStore(store);

sagaMiddleware.run(sagas);
store.close = () => store.dispatch(END);

export { store, persistor };
