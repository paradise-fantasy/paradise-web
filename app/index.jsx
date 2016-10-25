import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './redux-logic/store';
import Root from './Root';

// Setup our redux store (our initial state)
const store = configureStore();

// Setup browser history, allows us to use "back" and "forward" navigation in browser
const history = syncHistoryWithStore(browserHistory, store);

// Render our App in the webpage at the node with id 'react-root'
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('react-root')
);

/*
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('mount')
)
*/
