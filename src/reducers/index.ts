import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import messageReducer from './message.reducer';
import loadingDialogReducer from './loadingDialog.reducer';
import postReducer from './post.reducer';

import ReducerState from '../types/Redux.type';

export default combineReducers<ReducerState>({
  messageReducer,
  loadingDialogReducer,
  postReducer,
  
  form: reduxFormReducer,
  routing: routerReducer
});
