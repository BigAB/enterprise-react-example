import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { store } from '@enterprise/store';
import App from './app/app';

const history = createBrowserHistory();

const rootComponent = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(rootComponent, document.getElementById('root'));
