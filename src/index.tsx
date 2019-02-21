import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import createMyTheme from './style/createMyTheme';
import configureStore from './configureStore';
import App from './containers/App.container';

import * as serviceWorker from './serviceWorker';

const theme = createMyTheme();
const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('myRoot')
);

serviceWorker.unregister();
