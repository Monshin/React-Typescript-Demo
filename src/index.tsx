import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { ConnectedRouter } from 'connected-react-router';

import createMyTheme from './style/createMyTheme';
import configureStore from './configureStore';
import App from './containers/App.container';

import './style/style.css';

const theme = createMyTheme();
const { store, history } = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('myRoot'),
);
