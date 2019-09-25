import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import Navigation from './navigation';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const App = () => (
  <Provider store = { store }>
    <Navigation />
  </Provider>
);
export default App;
