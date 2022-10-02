import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import reducers from './Context/reducers';
import { createStore } from 'redux';
import Navigator from './Navigator';

export const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <Navigator />
  </Provider>
);
