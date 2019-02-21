import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import messageReducer from './message.reducer';
import loadingDialogReducer from './loadingDialog.reducer';

import ReducerState from '../types/Redux.type';

const reducers = {
  messageReducer,
  loadingDialogReducer,
  form: reduxFormReducer,
  routing: routerReducer
};

export default combineReducers<ReducerState>(reducers);
