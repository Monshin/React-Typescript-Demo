import { RouterState } from 'react-router-redux';
import { FormStateMap } from 'redux-form';

import { State as MessageState } from './message.type';
import { State as LoadingDialogState } from './loadingDialog.type';
import { State as PostState } from './post.type';

export default interface ReducerState {
  messageReducer: MessageState;
  loadingDialogReducer: LoadingDialogState;
  postReducer: PostState;

  form: FormStateMap;
  routing: RouterState;
}
