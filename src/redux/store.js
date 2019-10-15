import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../redux/reducers';

import Navigation from '../navigation';
import rootSaga from './saga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

const store = createStore(
  persistedReducer,
  enhancer
);
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store)

const App = () => (

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigation />
    </PersistGate>
  </Provider>
);
export default App;
