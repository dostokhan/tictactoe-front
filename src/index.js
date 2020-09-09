import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash/throttle';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { loadState, saveState, configureStore } from './store/configureStore';
// import './app.global.css';

const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(
  throttle(() => {
    console.log('%c STORE PERSISTED ', 'background: green; color: black');
    saveState({
      app: store.getState().app
    });
  }, 1000)
);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
