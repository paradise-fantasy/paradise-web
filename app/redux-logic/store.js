import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import thunk from 'redux-thunk';
import { apiReducer, logReducer, notificationsReducer, configure as configureSockets } from './sockets';

const reducer = combineReducers({
  api: apiReducer,
  log: logReducer,
  notificatons: notificationsReducer,
  routing
});

const configureStore = preloadedState => {
  // Combine rootReducer and preloadedState to form our store

  const store = createStore(
    reducer,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  // This block allows us to use hot module replacement (webpack) with redux
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default; // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  configureSockets(store.dispatch);

  return store;
};

export default configureStore;
