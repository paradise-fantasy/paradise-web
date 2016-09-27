import { createStore } from 'redux';
import rootReducer from './reducer';

const configureStore = preloadedState => {
  // Combine rootReducer and preloadedState to form our store
  const store = createStore(
    rootReducer,                                                // Our reducer
    preloadedState,                                             // Initial state
    window.devToolsExtension && window.devToolsExtension()      // Middleware, this allows us to use dev-tools in browser
  );

  // This block allows us to use hot module replacement (webpack) with redux
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default; // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
