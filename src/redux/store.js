import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../redux/reducers';

import { AppWithNavigationState, navigationMiddleware } from '../navigation';
import rootSaga from './saga';

//Setup the persistion
const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//Create Middleware
const sagaMiddleware = createSagaMiddleware();

//Apply Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(navigationMiddleware, sagaMiddleware)
);

//Create Redux Store
const store = createStore(
  persistedReducer,
  enhancer
);
sagaMiddleware.run(rootSaga);

//Create Store persistor
const persistor = persistStore(store)

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppWithNavigationState
        screenProps={this.props}
      />
    </PersistGate>
  </Provider>
);
export default App;
