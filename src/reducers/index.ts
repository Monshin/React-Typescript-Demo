import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { reducer as reduxFormReducer } from 'redux-form';

import messageReducer from './message.reducer';
import sidemenuReducer from './sidemenu.reducer';
import loadingDialogReducer from './loadingDialog.reducer';
import postReducer from './post.reducer';

import ReducerState from '../types/Redux.type';

export default (history: History) =>
  combineReducers<ReducerState>({
    messageReducer,
    sidemenuReducer,
    loadingDialogReducer,
    postReducer,

    form: reduxFormReducer,
    router: connectRouter(history)
  });
