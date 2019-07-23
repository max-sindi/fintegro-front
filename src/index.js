import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';
import store from './redux/store';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

registerServiceWorker();

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
