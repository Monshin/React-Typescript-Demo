import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import StylesProvider from '@material-ui/styles/StylesProvider';
import createGenerateClassName from '@material-ui/styles/createGenerateClassName';
import { ConnectedRouter } from 'connected-react-router';

import createMyTheme from './style/createMyTheme';
import configureStore from './configureStore';
import App from './containers/App.container';
import config from './config/config';

import './style/style.css';

const theme = createMyTheme();

// Create a new class name generator.
const generateClassName = createGenerateClassName({
  disableGlobal: config.REACT_EVN === 'production',
  productionPrefix: 'c',
});

const { store, history } = configureStore();

ReactDOM.render(
  <StylesProvider generateClassName={generateClassName}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  </StylesProvider>,
  document.getElementById('myRoot'),
);
