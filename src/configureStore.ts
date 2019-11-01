import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers';
import rootEpic from './epics';
import config from './config/config';
import ReducerState from './types/Redux.type';

export default function configureStore() {
  // const epicMiddleware = createEpicMiddleware(rootEpic);
  const epicMiddleware = createEpicMiddleware<any, any, ReducerState>();

  const history = createBrowserHistory();
  const composeEnhancers = config.REACT_EVN === 'debug' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

  const store = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), epicMiddleware)),
  );

  epicMiddleware.run(rootEpic);

  return { store, history };
}
