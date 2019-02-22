import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers';
import rootEpic from './epics';
import config from './config/config';
import ReducerState from './types/Redux.type';

export default function configureStore() {
  // const epicMiddleware = createEpicMiddleware(rootEpic);
  const epicMiddleware = createEpicMiddleware<any, any, ReducerState>();

  let composeEnhancers;
  if (config.REACT_EVN === 'debug') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  else {
    composeEnhancers = compose;
  }

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  );

  epicMiddleware.run(rootEpic);

  return store;
}
